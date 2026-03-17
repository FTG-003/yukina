Run a content audit on this Yukina/Astro blog project and report issues.

## Instructions

Scan all `.md` files under `src/contents/posts/` and produce a report with the following checks:

---

### 1. Missing required fields

Flag any post missing one of these frontmatter fields:

- `title` (required)
- `published` (required)
- `category` (strongly recommended)

Format: list file path + which fields are missing.

---

### 2. Non-standard categories

Valid categories (matching the subdirectory names): `research`, `diary`, `announcements`.

Flag any post where the `category` frontmatter value doesn't match the subdirectory it lives in, or uses a value not in the list above.

---

### 3. Inconsistent tags

Collect all tag values across all posts. Flag tags that appear to be duplicates due to capitalization differences (e.g., `"AI"` and `"ai"`, `"Machine Learning"` and `"machine-learning"`).

Show the conflicting variants and which files use them.

---

### 4. Posts without a cover image

List posts that have no `cover` field in frontmatter. These will use the auto-generated banner fallback — not necessarily a problem, but useful to know.

---

### 5. Stale drafts

List posts with `draft: true` whose `published` date is more than 30 days before today. These may need a decision (publish or delete).

---

## Output format

Produce a Markdown report with one section per check. Use ✅ if a check passes with no issues, or a numbered list of problems if issues are found. End with a summary count of total issues found.

## Key project facts

- Posts directory: `src/contents/posts/` (subdirs: `research/`, `diary/`, `announcements/`)
- Frontmatter schema: `src/content.config.ts`
- Cover fallback logic: `src/utils/cover.ts` — uses rotating banners from `yukina.config.ts`
- Slug mode is `HASH` — tags/categories affect taxonomy pages, not post URLs
