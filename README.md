# Vertex GEO site: deploy guide

1. Open `assets/site.js`. In `CONFIG` at the top, fill in: `waLink` (your WhatsApp Business short link, so your phone number is never shown), `waName`, `email`, `linkedin` (your LinkedIn profile URL; the link stays hidden until you add it), `legalName`, `country`, and `gaId` (your Google Analytics 4 ID, like G-XXXXXXXXXX). Empty values keep that feature off. Never put API keys or passwords anywhere in these files.
2. Run `python3 set-domain.py yourdomain.com` once. It replaces YOUR-DOMAIN.example in canonical tags, sitemap, robots.txt and schema.
3. Upload the whole folder to Netlify, Cloudflare Pages or GitHub Pages. Turn on "Enforce HTTPS". `_redirects` (301s from old .html links) and `_headers` (security headers) work on Netlify and Cloudflare Pages, not GitHub Pages. Set www to redirect to the main domain in your host or DNS settings.
4. Search Console: add your domain, verify it with the DNS record, then submit https://yourdomain.com/sitemap.xml and request indexing of the home page.
5. Google Analytics: create a GA4 property, put its ID in `gaId`. It loads only after a visitor clicks Accept. Turn off Google signals and ad personalization in GA settings too.
6. UTM tags for the links you send, for example: https://yourdomain.com/?utm_source=whatsapp&utm_medium=message&utm_campaign=client-outreach
7. Before launch: have the Terms, Refund policy and Privacy notice reviewed for your country, and test the form on your phone.

Every page is pre-rendered static HTML, so search engines and AI crawlers read the content without running scripts.
