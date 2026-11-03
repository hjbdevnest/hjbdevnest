# HJB DevNest – Angular Website

Personal software development website for Brijesh Patel.

## Requirements
- Node.js 20.19+ or 22.12+
- npm

## Run locally
```bash
npm install
npm start
```
Open http://localhost:4200

## Production build
```bash
npm run build
```

Angular's application builder outputs the browser website to:
`dist/hjbdevnest-web/browser`

## Cloudflare Pages deployment
Connect this repository to Cloudflare Pages and use:

- Framework preset: Angular (or None / Other if preset causes incorrect settings)
- Build command: `npm run build`
- Build output directory: `dist/hjbdevnest-web/browser`
- Root directory: `/`
- Production branch: `main`

Commit and push changes to `main`; Cloudflare will build and deploy automatically.

## Before publishing
- Confirm the public business email address is correct.
- Review all service descriptions and only advertise services you actively provide.
- Add genuine portfolio projects and client-approved testimonials.
- Add a privacy notice before collecting personal information.
- Configure a contact form backend before promising form submission.
- Review page metadata and add verified social profile links.
- Consider Angular SSR/prerendering for stronger SEO on public content pages.

## Notes
This starter intentionally has no fake client logos, fabricated testimonials, invented project metrics, or stock personal photograph. The hero and About section use a CSS developer-themed illustration instead of a personal photo.
