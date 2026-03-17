Create a new blog post for this Yukina/Astro blog project.

## Instructions

The argument passed to this command is the post title: `$ARGUMENTS`

**Steps to follow:**

1. **Determine category**: If the title or context doesn't make it clear, ask the user to choose one of:
   - `research` — articles, studies, explorations
   - `diary` — personal reflections, notes, updates
   - `announcements` — news, releases, events

2. **Ask for optional fields** if not obvious from the title:
   - Tags (comma-separated list)
   - Short description (1–2 sentences)
   - Author (default: check `yukina.config.ts` for the `username` field)

3. **Generate the filename** based on today's date in format `MM-DD-YY.md`. If a file with that name already exists in the target directory, append a short slug from the title (e.g., `03-13-26-crdt-notes.md`).

4. **Create the file** at `src/contents/posts/<category>/<filename>` with this frontmatter:

```yaml
---
title: "<title from argument>"
published: <today's date as YYYY-MM-DD>
draft: true
description: "<description or empty string>"
tags: [<tags or empty>]
category: "<chosen category>"
author: "<author>"
---
```

Leave the body of the post empty (just a blank line after the frontmatter closing `---`).

5. **Confirm** by showing the full path of the created file and its frontmatter content.

## Key project facts

- Posts directory: `src/contents/posts/`
- Valid categories (subdirectories): `research/`, `diary/`, `announcements/`
- Frontmatter schema defined in `src/content.config.ts`
- Posts with `draft: true` are hidden in production but visible in `pnpm dev`
- Slug mode is `HASH` (URLs are SHA256 of filename, first 8 chars) — filename doesn't affect the URL
