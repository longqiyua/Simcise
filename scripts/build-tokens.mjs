import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourcePath = path.join(root, "tokens.json");
const outputPath = path.join(root, "tokens.css");
const source = JSON.parse(fs.readFileSync(sourcePath, "utf8"));

function isToken(value) {
  return value && typeof value === "object" && Object.hasOwn(value, "$value");
}

function flatten(group, prefix = []) {
  const entries = [];
  for (const [key, value] of Object.entries(group || {})) {
    if (key.startsWith("$")) continue;
    if (isToken(value)) entries.push([prefix.concat(key), value.$value]);
    else if (value && typeof value === "object") entries.push(...flatten(value, prefix.concat(key)));
  }
  return entries;
}

function variableForPath(tokenPath) {
  const parts = tokenPath.split(".");
  if (parts[0] === "ref") return `--sim-ref-${parts.slice(1).join("-")}`;
  if (parts[0] === "sys") return `--sim-sys-${parts.slice(2).join("-")}`;
  if (parts[0] === "comp") return `--sim-comp-${parts.slice(1).join("-")}`;
  throw new Error(`Unsupported alias path: ${tokenPath}`);
}

function cssValue(value) {
  if (typeof value !== "string") return String(value);
  return value.replace(/\{([^}]+)\}/g, (_, tokenPath) => `var(${variableForPath(tokenPath)})`);
}

function declarations(entries, namespace) {
  return entries.map(([parts, value]) => `  --sim-${namespace}-${parts.join("-")}: ${cssValue(value)};`).join("\n");
}

function systemDeclarations(group) {
  return flatten(group).map(([parts, value]) => `  --sim-sys-${parts.join("-")}: ${cssValue(value)};`).join("\n");
}

function productBlock(product, theme) {
  const selector = theme === "light"
    ? `[data-simcise-product="${product}"]`
    : `[data-simcise-product="${product}"][data-theme="dark"]`;
  return `${selector} {\n${systemDeclarations(source.products[product][theme])}\n}`;
}

const css = `/* Generated from tokens.json by scripts/build-tokens.mjs. Do not edit.\n * Simcise ${source.meta.version} · ${source.meta.status}\n */\n\n:root, [data-theme="light"] {\n  color-scheme: light;\n${declarations(flatten(source.ref), "ref")}\n${systemDeclarations(source.sys.light)}\n${declarations(flatten(source.comp), "comp")}\n}\n\n[data-theme="dark"] {\n  color-scheme: dark;\n${systemDeclarations(source.sys.dark)}\n}\n\n${productBlock("route", "light")}\n\n${productBlock("route", "dark")}\n\n${productBlock("yuich", "light")}\n\n${productBlock("yuich", "dark")}\n\n@media (prefers-reduced-motion: reduce) {\n  :root {\n    --sim-sys-duration-micro: 1ms;\n    --sim-sys-duration-enter: 1ms;\n    --sim-sys-duration-panel: 1ms;\n  }\n}\n\n@media (prefers-contrast: more) {\n  :root {\n    --sim-sys-border-default: var(--sim-sys-text-secondary);\n    --sim-sys-border-strong: var(--sim-sys-text-primary);\n  }\n}\n`;

if (process.argv.includes("--check")) {
  const current = fs.existsSync(outputPath) ? fs.readFileSync(outputPath, "utf8") : "";
  if (current !== css) {
    console.error("tokens.css is stale. Run: node scripts/build-tokens.mjs");
    process.exit(1);
  }
  console.log("tokens.css is in sync.");
} else {
  fs.writeFileSync(outputPath, css, "utf8");
  console.log(`Generated ${path.relative(root, outputPath)}.`);
}
