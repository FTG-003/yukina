#!/usr/bin/env node
/**
 * Generate SEO/GEO assets for Yukina / Pyragogy Blog.
 *
 * Creates:
 *   - llms-full.txt (all blog posts + pages concatenated for AI crawlers)
 *
 * Usage:  node scripts/generate-seo.mjs
 *         (runs automatically before `astro build`)
 *
 * Signed: Fabrizio Terzi
 */

import { readFileSync, writeFileSync, existsSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";

const ROOT = resolve(import.meta.dirname, "..");
const CONTENT_DIR = join(ROOT, "src", "contents", "posts");
const PUBLIC_DIR = join(ROOT, "public");
const SITE_URL = "https://pyragogy.org";

// ── Collect content files ────────────────────────────────

function collectMdFiles(dir, baseCategory = "") {
  if (!existsSync(dir)) return [];
  const entries = readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const fullPath = join(dir, entry.name);
    const category = baseCategory || entry.name;

    if (entry.isDirectory()) {
      files.push(...collectMdFiles(fullPath, entry.name));
    } else if (entry.name.endsWith(".md")) {
      files.push({ path: fullPath, category: baseCategory || "uncategorized", slug: entry.name.replace(/\.md$/, "") });
    }
  }

  return files;
}

function stripFrontmatter(content) {
  return content.replace(/^---[\s\S]*?---\n/, "").trim();
}

function stripMarkdownSyntax(text) {
  return text
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/[#*_~`>|-]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function extractTitle(content) {
  const match = content.match(/^title:\s*["']?(.+?)["']?\s*$/m);
  if (match) return match[1].replace(/["']/g, "").trim();
  const h1Match = content.match(/^#\s+(.+)$/m);
  return h1Match ? h1Match[1].trim() : "Untitled";
}

const STATIC_PAGES = [
  { slug: "/", title: "Home" },
  { slug: "/archive", title: "Archive" },
  { slug: "/about", title: "About" },
  { slug: "/tags", title: "Tags" },
  { slug: "/categories", title: "Categories" },
];

// ── llms-full.txt ────────────────────────────────────────

const contentFiles = collectMdFiles(CONTENT_DIR).sort((a, b) => a.path.localeCompare(b.path));

const lines = [
  `# Pyragogy Blog — Full Content`,
  `# ${SITE_URL}`,
  `# Generated: ${new Date().toISOString().slice(0, 10)}`,
  `# Signed: Fabrizio Terzi`,
  ``,
  `This file contains the full text of every public page and blog post.`,
  `============================================================`,
  ``,
];

// Static pages
for (const page of STATIC_PAGES) {
  lines.push("", "=".repeat(60), "");
  lines.push(`URL: ${SITE_URL}${page.slug}`);
  lines.push(`Title: ${page.title}`);
  lines.push("");
}

// Blog posts
for (const { path: filepath, category, slug } of contentFiles) {
  const url = `${SITE_URL}/posts/${category}/${slug}`;
  const content = readFileSync(filepath, "utf-8");
  const title = extractTitle(content);
  const body = stripMarkdownSyntax(stripFrontmatter(content));

  if (body.length < 20) continue;

  lines.push("", "=".repeat(60), "");
  lines.push(`URL: ${url}`);
  lines.push(`Title: ${title}`);
  lines.push("");
  lines.push(body);
}

lines.push("", "=".repeat(60), "");
lines.push(`End of content — ${contentFiles.length} posts.`);
lines.push(`Signed: Fabrizio Terzi`);

writeFileSync(join(PUBLIC_DIR, "llms-full.txt"), lines.join("\n"), "utf-8");
console.log(`✅ llms-full.txt written (${contentFiles.length} posts)`);

// ── Done ─────────────────────────────────────────────────

process.exit(0);