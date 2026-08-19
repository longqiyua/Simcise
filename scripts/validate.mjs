import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const required = [
  "SKILL.md", "agents/openai.yaml", "tokens.json", "tokens.css", "components.css",
  "examples/starter.html", "references/workflow.md", "references/components.md",
  "references/enhancements.md", "INTEGRATION.md"
];

for (const file of required) {
  if (!fs.existsSync(path.join(root, file))) errors.push(`Missing required artifact: ${file}`);
}

const tokens = JSON.parse(fs.readFileSync(path.join(root, "tokens.json"), "utf8"));
if (tokens.meta?.version !== "V1.0") errors.push("tokens.json meta.version must be V1.0");
if (tokens.meta?.sourceOfTruth !== "tokens.json") errors.push("tokens.json must declare itself as sourceOfTruth");

const tokenPaths = new Set();
function collectTokens(group, prefix = []) {
  for (const [key, value] of Object.entries(group || {})) {
    if (key.startsWith("$")) continue;
    const next = prefix.concat(key);
    if (value && typeof value === "object" && Object.hasOwn(value, "$value")) {
      tokenPaths.add(next.join("."));
      if (!value.$type) errors.push(`Token lacks $type: ${next.join(".")}`);
      if (typeof value.$value === "string") {
        for (const match of value.$value.matchAll(/\{([^}]+)\}/g)) {
          if (!lookup(tokens, match[1])) errors.push(`Unknown token alias: ${match[1]}`);
        }
      }
    } else if (value && typeof value === "object") collectTokens(value, next);
  }
}

function lookup(object, dottedPath) {
  return dottedPath.split(".").reduce((value, key) => value?.[key], object);
}

collectTokens(tokens.ref, ["ref"]);
collectTokens(tokens.sys, ["sys"]);
collectTokens(tokens.comp, ["comp"]);
collectTokens(tokens.products, ["products"]);

const buildCheck = spawnSync(process.execPath, [path.join(root, "scripts/build-tokens.mjs"), "--check"], { encoding: "utf8" });
if (buildCheck.status !== 0) errors.push((buildCheck.stderr || buildCheck.stdout).trim());

const generated = fs.readFileSync(path.join(root, "tokens.css"), "utf8");
const components = fs.readFileSync(path.join(root, "components.css"), "utf8");
const starter = fs.readFileSync(path.join(root, "examples/starter.html"), "utf8");
const skill = fs.readFileSync(path.join(root, "SKILL.md"), "utf8");
const agentMetadata = fs.readFileSync(path.join(root, "agents/openai.yaml"), "utf8");

if (!generated.startsWith("/* Generated from tokens.json")) errors.push("tokens.css must remain generated");
if (/--sim-ref-[\w-]+/.test(components)) errors.push("components.css must not consume Reference tokens");
if (/#[0-9a-f]{3,8}\b/i.test(components)) errors.push("components.css contains a hardcoded hex color");
for (const marker of [".sim-button", ".sim-field", ".sim-card", ".sim-alert", ".sim-dialog", ".sim-skeleton"]) {
  if (!components.includes(marker)) errors.push(`components.css missing core contract: ${marker}`);
}
if (/\sstyle=/.test(starter)) errors.push("starter.html contains inline visual styles");
for (const marker of ["tokens.css", "components.css", "aria-describedby", "role=\"alert\"", "data-theme"]) {
  if (!starter.includes(marker)) errors.push(`starter.html missing marker: ${marker}`);
}
if (!skill.startsWith("---\nname: simcise-design\n")) errors.push("SKILL.md frontmatter is invalid");
const frontmatter = skill.match(/^---\n([\s\S]*?)\n---/);
if (!frontmatter) errors.push("SKILL.md frontmatter is missing");
else {
  const keys = [...frontmatter[1].matchAll(/^([a-z_]+):/gm)].map(match => match[1]);
  if (keys.join(",") !== "name,description") errors.push("SKILL.md frontmatter may contain only name and description");
}
if (skill.split(/\r?\n/).length > 500) errors.push("SKILL.md exceeds 500 lines");
for (const marker of ["pure HTML, CSS, and vanilla JavaScript", "Do not introduce React, Vue, TypeScript, JSX", "progressive enhancement"]) {
  if (!skill.toLowerCase().includes(marker.toLowerCase())) errors.push(`SKILL.md missing vanilla-runtime scope: ${marker}`);
}
for (const marker of ["https://longqiyua.github.io/Simcise/", "Do not substitute `localhost`", "deployed state"]) {
  if (!skill.includes(marker)) errors.push(`SKILL.md missing remote-preview contract: ${marker}`);
}
if (!agentMetadata.includes('default_prompt: "Use $simcise-design')) errors.push("agents/openai.yaml default_prompt must mention $simcise-design");
if (!agentMetadata.includes("pure HTML, CSS, and vanilla JavaScript")) errors.push("agents/openai.yaml must expose the vanilla-runtime scope");
for (const reference of [...skill.matchAll(/\]\((references\/[^)]+)\)/g)].map(match => match[1])) {
  if (!fs.existsSync(path.join(root, reference))) errors.push(`Broken SKILL reference: ${reference}`);
}

const declaredVariables = new Set([...generated.matchAll(/(--sim-[\w-]+)\s*:/g)].map(match => match[1]));
for (const match of components.matchAll(/var\((--sim-[\w-]+)/g)) {
  if (!declaredVariables.has(match[1])) errors.push(`Unknown CSS token in components.css: ${match[1]}`);
}

function resolveToken(token, seen = new Set()) {
  if (!token || !Object.hasOwn(token, "$value")) return token;
  if (typeof token.$value !== "string") return token.$value;
  const exact = token.$value.match(/^\{([^}]+)\}$/);
  if (!exact) return token.$value;
  if (seen.has(exact[1])) throw new Error(`Circular alias: ${exact[1]}`);
  seen.add(exact[1]);
  return resolveToken(lookup(tokens, exact[1]), seen);
}

function rgb(value) {
  const hex = value.trim().replace("#", "");
  if (!/^[0-9a-f]{6}$/i.test(hex)) throw new Error(`Unsupported contrast color: ${value}`);
  return [0, 2, 4].map(index => Number.parseInt(hex.slice(index, index + 2), 16));
}

function luminance(value) {
  return rgb(value).map(channel => {
    const part = channel / 255;
    return part <= .04045 ? part / 12.92 : ((part + .055) / 1.055) ** 2.4;
  }).reduce((sum, part, index) => sum + part * [.2126, .7152, .0722][index], 0);
}

function contrast(a, b) {
  const first = luminance(a);
  const second = luminance(b);
  return (Math.max(first, second) + .05) / (Math.min(first, second) + .05);
}

function validateTheme(label, sys) {
  const pairs = [
    ["text-primary", "bg-canvas", 4.5],
    ["text-secondary", "bg-canvas", 4.5],
    ["text-muted", "bg-canvas", 4.5],
    ["on-accent", "accent", 4.5],
    ["on-danger", "danger", 4.5]
  ];
  for (const [foreground, background, minimum] of pairs) {
    const ratio = contrast(resolveToken(sys[foreground]), resolveToken(sys[background]));
    if (ratio < minimum) errors.push(`${label} contrast ${foreground}/${background} is ${ratio.toFixed(2)}; expected ${minimum}`);
  }
}

for (const theme of ["light", "dark"]) {
  validateTheme(theme, { ...tokens.sys.light, ...(theme === "dark" ? tokens.sys.dark : {}) });
  for (const product of ["route", "yuich"]) {
    validateTheme(`${product}/${theme}`, {
      ...tokens.sys.light,
      ...(theme === "dark" ? tokens.sys.dark : {}),
      ...tokens.products[product].light,
      ...(theme === "dark" ? tokens.products[product].dark : {})
    });
  }
}

const staleVersion = /\bv(?:[2-9]\d*|1\.[1-9]\d*|1\.0\.\d+)\b/i;
function walk(directory) {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    if ([".git", "node_modules"].includes(entry.name)) continue;
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) walk(fullPath);
    else if (/[.](md|html|json|css|yaml)$/i.test(entry.name) && staleVersion.test(fs.readFileSync(fullPath, "utf8"))) {
      errors.push(`Stale secondary version marker in ${path.relative(root, fullPath)}`);
    }
  }
}
walk(root);

if (errors.length) {
  for (const error of [...new Set(errors)]) console.error(`ERROR: ${error}`);
  process.exit(1);
}

console.log(`Simcise V1.0 MVP validation passed (${tokenPaths.size} tokens checked).`);
