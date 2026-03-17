List and manage draft posts in this Yukina/Astro blog project.

## Instructions

1. **Scan** all `.md` files under `src/contents/posts/` recursively.

2. **Filter** files where the frontmatter contains `draft: true`.

3. **Display** a formatted table of all drafts:

```
| Title | Category | Published date | File path |
|-------|----------|----------------|-----------|
| ...   | ...      | ...            | ...       |
```

If no drafts are found, say so clearly.

4. **Offer actions** for each draft (ask the user what they want to do):
   - **Publish**: Remove the `draft: true` line from frontmatter (or set `draft: false`)
   - **Delete**: Remove the file (ask for confirmation first)
   - **Edit**: Open the file for editing / show its full content

5. **Flag stale drafts**: If a draft's `published` date is more than 30 days before today, mark it with ⚠️ and note it may need review.

## Key project facts

- Posts directory: `src/contents/posts/` (subdirectories: `research/`, `diary/`, `announcements/`)
- Draft posts are excluded from production builds automatically — visible only in `pnpm dev`
- Frontmatter schema in `src/content.config.ts`
