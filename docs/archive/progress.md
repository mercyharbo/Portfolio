# CodeWithMercy Progress

## Current Project Status

The project is a Next.js App Router portfolio for the CodeWithMercy personal developer brand.

Current architecture:

- Framework: Next.js 16 with React 19.
- Styling: Tailwind CSS 4 with a dark blue/primary blue brand system.
- Homepage: Single-page portfolio in `src/app/page.tsx`.
- Layout metadata: Global SEO metadata in `src/app/layout.tsx`.
- Sitemap: Static homepage-only sitemap in `src/app/sitemap.ts`.
- Robots: Public crawl rules in `src/app/robots.ts`.
- Project data: Local JSON in `src/data/projects.json`.
- Experience data: Local JSON in `src/data/experience.json`.
- Contact: Dialog form posts to `src/app/api/send/route.ts`.

Current homepage sections:

- Hero
- Stats
- About
- Project Marquee
- Services
- Featured Projects
- Experience
- FAQ
- Contact CTA

Current SEO foundation:

- Global metadata exists.
- Keywords are defined globally.
- Open Graph and Twitter card metadata exist.
- Google verification exists.
- Robots configuration exists.
- Sitemap exists.
- ProfilePage JSON-LD exists.
- Shared SEO constants and helpers exist in `src/lib/seo.ts`.
- WebSite JSON-LD exists.
- FAQPage JSON-LD exists for the visible homepage FAQ.

Current gaps:

- No Contentful integration yet.
- No blog routes yet.
- No case-study routes yet.
- Project details are mainly local data and dialog-based.
- No testimonials section.
- No blog or project internal linking structure.
- Some existing frontend classes conflict with current implementation rules, including `tracking-*`, `uppercase`, and margin utility usage. These should be cleaned only when touching the relevant UI files later.

## Recently Completed

- Created planning documentation for SEO, content strategy, implementation backlog, Contentful, case studies, and blog roadmap.
- Inspected current repository structure.
- Confirmed the app should evolve from the current design rather than be redesigned.
- Implemented the technical SEO foundation:
  - Created `src/lib/seo.ts` for shared SEO constants, metadata helpers, robots defaults, and JSON-LD helpers.
  - Refactored `src/app/layout.tsx` to use shared metadata and render ProfilePage plus WebSite JSON-LD.
  - Refactored `src/app/sitemap.ts` and `src/app/robots.ts` to use the shared production site URL.
  - Preserved the homepage-only sitemap until blog and project routes exist.
- Implemented the homepage content strategy slice:
  - Strengthened Hero, About, and Services copy around frontend engineering, React, Next.js, TypeScript, performance, and practical SEO.
  - Added a compact FAQ section near the CTA.
  - Added FAQPage JSON-LD for the visible FAQ content.
  - Improved homepage image alt text in Hero, CTA, and Project Marquee.
  - Avoided Blog and Projects navigation links because those routes do not exist yet.

## Next Recommended Task

Continue with the next SEO foundation slice before building full content routes.

Recommended next task:

1. Confirm Contentful space/model details and required environment variables.
2. Add the Contentful integration foundation.
3. Configure Contentful image domains in `next.config.ts`.
4. Keep preview/draft support planned but out of public routes until credentials and models are ready.
5. Run TypeScript and build checks after the integration is added.

Why this first:

- It reduces duplication before adding blog and case-study routes.
- It creates a stable pattern for future metadata.
- It is lower risk than adding the whole CMS first.
- The shared SEO helper is now ready for route-specific blog and case-study metadata.

## Pending

### Technical SEO

- [x] Create shared SEO config.
- [x] Create structured data helpers.
- [x] Refactor homepage metadata.
- [x] Add WebSite JSON-LD.
- [x] Prepare dynamic sitemap structure.
- [x] Confirm production domain and canonical strategy.

### Contentful

- [ ] Create Contentful space and content models.
- [ ] Add environment variables.
- [ ] Add Contentful SDK or API fetch layer.
- [ ] Configure Contentful image domains in `next.config.ts`.
- [ ] Build published content fetching.
- [ ] Plan and implement preview mode.

### Blog

- [ ] Create `/blog`.
- [ ] Create `/blog/[slug]`.
- [ ] Render Contentful Rich Text.
- [ ] Add blog metadata.
- [ ] Add BlogPosting JSON-LD.
- [ ] Add related posts.
- [ ] Add social sharing.

### Case Studies

- [ ] Add project slugs.
- [ ] Expand project schema.
- [ ] Create `/projects/[slug]`.
- [ ] Link homepage project cards to case studies.
- [ ] Add project metadata and structured data.
- [ ] Add screenshots and result sections.

### Homepage

- [x] Add FAQ section.
- [ ] Add testimonials or proof only when real content is available.
- [x] Improve image alt text.
- [ ] Add internal links to Blog and Projects after routes exist.
- [ ] Keep visual identity and layout direction unchanged.

### Performance and Accessibility

- [ ] Audit client component boundaries.
- [ ] Review animation library loading.
- [ ] Improve image `sizes` values.
- [ ] Review third-party analytics script impact.
- [ ] Check heading structure after new sections.
- [ ] Improve contact dialog validation accessibility.

## Future Improvements

- Dynamic OG image generation.
- Blog category and tag pages after enough posts exist.
- Newsletter signup after a real publishing workflow exists.
- Analytics event tracking for contact, resume, project, and share clicks.
- Downloadable frontend audit checklist.
- Developer setup or tools page if it supports brand growth.

## Resume Instructions

When resuming, say:

> Continue from docs/progress.md

Recommended resume flow:

1. Read `docs/progress.md`.
2. Read `docs/implementation-backlog.md`.
3. Start with the next recommended task unless the user specifies a different priority.
4. Keep changes scoped to the selected task.
5. Do not redesign the website.
6. Preserve the current CodeWithMercy visual identity.
7. Follow the frontend implementation rules from the active instructions.
8. After each implementation task, update this progress file with what changed, what was verified, and the next recommended task.

## Verification To Run After Future Code Changes

- `npm run build`
- `npx tsc --noEmit` if TypeScript checking is needed separately.
- Manual responsive check for homepage, blog, and case-study pages.
- Lighthouse check for homepage and at least one blog or case-study page.
