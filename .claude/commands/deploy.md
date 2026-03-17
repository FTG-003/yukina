Guide the build and deploy process for this Yukina/Astro blog (pyragogy.org).

## Instructions

Run these steps in order, stopping if any step fails:

---

### Step 1: Check for uncommitted changes

Run `git status` and show the output. If there are unstaged or uncommitted changes, ask the user if they want to commit them before building, or proceed anyway.

---

### Step 2: Check for accidental draft removals

Before building, scan `src/contents/posts/` for any file where `draft: true` was recently removed (i.e., check `git diff` for posts that had `draft: true` and no longer do). Warn if any post is being published for the first time in this deploy.

---

### Step 3: Build the site

Run `pnpm build` and show the output. If the build fails, display the error and stop. Do not proceed to deploy if the build fails.

---

### Step 4: Commit and push

If the build succeeds, help the user:

1. Stage relevant files: suggest `git add src/contents/ public/ yukina.config.ts` (or all changes with `git add -A` if appropriate)
2. Write a concise commit message describing what changed (ask the user for context if needed)
3. Push to `main`: `git push origin main`

---

### Step 5: Confirm deploy triggered

After the push, remind the user:

- GitHub Actions workflow (`.github/workflows/astro-deploy.yml`) triggers automatically on push to `main`
- The site will be live at `https://www.pyragogy.org` after the workflow completes (usually 2–5 minutes)
- They can check the workflow status at the GitHub Actions page of the repository

---

## Key project facts

- Build command: `pnpm build`
- Deploy: automatic via GitHub Actions on push to `main`
- Custom domain: `pyragogy.org` (configured via `CNAME` file)
- No manual upload or FTP needed — just push to `main`
