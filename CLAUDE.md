# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev        # Start development server
pnpm build      # Build static site
pnpm preview    # Preview built site locally
```

No test or lint commands are configured.

## Architecture

**Yukina** is an Astro 5 static blog template, customized for [Pyragogy.org](https://www.pyragogy.org). It uses Svelte for interactive components, Tailwind CSS for styling, and Pagefind for client-side search.

### Content

Posts are Markdown files in `src/contents/posts/` organized by category subdirectory (e.g., `research/`, `diary/`). Frontmatter fields: `title`, `published`, `draft`, `description`, `cover`, `tags`, `category`, `author`.

Draft posts (`draft: true`) are hidden in production but visible in dev.

Slug generation (`src/utils/hash.ts`) operates in either `HASH` mode (SHA256, first 8 chars) or `RAW` mode (original filename), controlled by `yukina.config.ts`.

### Key Files

- **`yukina.config.ts`** — Site-level config: title, URL, locale, nav items, profile, social links, slug mode, banner.
- **`src/content.config.ts`** — Astro content collections schema for posts and specs.
- **`src/utils/content.ts`** — Core data functions: `GetSortedPosts()`, `GetArchives()`, `GetTags()`, `GetCategories()`.
- **`src/locales/`** — i18n via `i18n(key, ...interpolations)` with `en` and `zh_cn` languages.

### Layout Hierarchy

```
BaseLayout (HTML shell, head)
  └── MainLayout (NavBar, Banner, Sidebar, Footer)
        └── PostLayout (wraps individual posts)
```

### Component Split

- **Astro components** — server-rendered (NavBar, Footer, Banner, SideBar, etc.)
- **Svelte components** — client-side interactive (SearchBar, MobileSearchBar)

### Routing

File-based via Astro pages:

- `[...page].astro` — paginated home feed (6 posts/page)
- `posts/[...slug].astro` — individual post pages
- `categories/[category].astro` / `tags/[tag].astro` — taxonomy pages
- `archive.astro` — all posts by year

### Styling

Tailwind CSS with dark mode via `[data-theme="dark"]` selector. CSS custom properties (`--primary-color`, `--text-color`, etc.) drive theming. Global styles in `src/styles/`.

### Integrations

Astro integrations: `@astrojs/tailwind`, `@astrojs/svelte`, `@astrojs/sitemap`, `astro-pagefind`, `@swup/astro` (page transitions), `astro-icon`, `@astrojs/partytown`.

Markdown pipeline: custom remark plugins for reading time (`remark-reading-time.mjs`) and TOC (`remark-toc.mjs`), rehype plugins for math (KaTeX) and heading anchors.

### Deployment

GitHub Actions workflow (`.github/workflows/astro-deploy.yml`) builds and deploys to GitHub Pages on push to `main`. Custom domain via `CNAME` (pyragogy.org).
