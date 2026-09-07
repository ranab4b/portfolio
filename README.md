# Rana Bilal — Engineering Portfolio

A 6-page static portfolio: Home, About, Work/Showcase, Services, Achievements,
Contact. Every piece of content is hardcoded directly into plain HTML —
there is no database, no admin panel, no build step, and no browser storage
involved. What you see in the files is exactly what every visitor sees,
every time.

## File structure

```
index.html              Home
about.html               About
projects.html            Engineering Showcase
services.html            Services
achievements.html        Achievements & Leadership
contact.html             Contact
assets/css/style.css     Shared design system for every page
assets/js/main.js        Nav, scroll reveal, counters, project modals, filters, form validation
assets/img/              Profile photo + real project screenshots
```

## How to update content

Because everything is static, editing content means editing the HTML
directly:

- **Home hero, stats, featured projects, testimonials** → `index.html`
- **Full project grid, filters, case-study details** → `projects.html`
  for the visible card content, and the `PROJECT_DATA` object near the
  top of `assets/js/main.js` for the "View Full Case Study" modal content
  (architecture bullets, contributions, stack, store links) — each
  project's `data-modal="..."` attribute in the HTML must match its key
  in `PROJECT_DATA`.
- **Service cards & pricing** → `services.html`
- **Achievement metrics/cards, 9-year timeline, skill matrix** →
  `achievements.html` and `about.html`
- **Contact info, social links, form** → `contact.html`
- **Resume link, email, phone, GitHub/LinkedIn** appear in multiple
  places (hero, footer, contact page) — search-and-replace across files
  when any of these change.

There is intentionally no shared data file or admin dashboard anymore —
that removes any risk of one file going stale relative to another, which
is what caused issues with the previous version. Every page is fully
self-contained.

## Deploying to GitHub Pages

1. Create a new GitHub repository and push the contents of this folder
   to it, with `index.html` at the repo root.
2. In the repo, go to **Settings → Pages**, set the source branch to
   `main` (or `master`) and the folder to `/ (root)`.
3. Your site will be live at `https://<username>.github.io/<repo-name>/`.

No build step, environment variables, or server configuration needed —
every file here is served exactly as-is.

## Also works on

- **Netlify**: drag the folder onto app.netlify.com/drop
- **Vercel**: import the repo, framework preset "Other" (no build command)
- **Any traditional host** (Hostinger, etc.): upload the folder contents
  into your domain's document root via File Manager or FTP/SFTP
