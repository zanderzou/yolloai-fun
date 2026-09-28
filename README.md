# Yollo AI Guide

Independent Astro + Markdown publication for `yolloai.fun`, focused on Yollo AI roleplay, character creation, AI images and video, privacy, regional availability, pricing, safety, comparisons, and alternatives.

## Commands

```bash
npm run dev
npm run build
npm run preview
npm run test:seo
npm run test:sites
```

Add articles under `src/content/blog`. Astro generates article routes, structured data, the XML sitemap, and RSS feed.

Cloudflare Pages: the existing `yolloai-fun` project uses Direct Upload, not Git-connected builds. Push the clean, tested source commit to the existing private GitHub repository; build with `npm run build`; explicitly upload `dist/client` to that existing project from `main` after the full publication gate passes.

