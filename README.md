# Vertex GEO site: deploy guide

Plain static HTML, CSS and a little JavaScript. No build step. Every link is relative, so it also opens correctly from a local folder, GitHub Pages (user or project site), Netlify and Cloudflare Pages. All content works without JavaScript; scripts only add the menu, theme switch, search, form hand-off and motion.

1. Open `assets/site.js`. In `CONFIG` at the top check `waLink` (your WhatsApp Business short link, so your number is never shown), `waName`, `email`, and add `linkedin` (your profile URL; the LinkedIn buttons stay hidden until you do). Optional: `legalName`, `country`, `regNo`, `taxNo`, `address`, `gaId`. Never put passwords or API keys in these files.
2. Run `python3 set-domain.py username.github.io/repo-name` (or `yourdomain.com`) once. It fills in canonical tags, sitemap, robots.txt and structured data.
3. GitHub Pages: create a repository, upload the contents of this folder to the root, then Settings > Pages > Deploy from branch > main / root. `.nojekyll` is included. Turn on Enforce HTTPS.
4. Search Console: add the property, submit `sitemap.xml`, and request indexing of the home page.
5. Before launch: have Terms, Refund policy and Privacy notice reviewed for your country, and test the form on your phone.
