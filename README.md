# Astro Cloudflare Pages Starters

An [Astro](astro.build) project, designed to deployed to [Cloudflare pages](https://pages.cloudflare.com).

## Setup

1. Fork this repo.
2. Update the configuration in `src/config/index.ts`
3. Update the `site` property with your site's domain in `astro.config.mjs`.
4. Update the sitemap URL in `public/robots.txt`
4. Push the updates.
6. Create a new [Cloudflare pages project](https://developers.cloudflare.com/pages/get-started/guide/).
7. Profit.

## What's in the box?

This project includes the following:

1. Basic blog with static content written in Markdown. See `src/content/blog`
2. API routes powered by Cloudflare Workers. See `src/pages/api`
3. Styles via Tailwind
