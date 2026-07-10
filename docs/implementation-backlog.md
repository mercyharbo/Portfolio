# CodeWithMercy Implementation Backlog

This backlog is scoped to the current Next.js portfolio and the requested SEO/content next phase. It intentionally avoids redesigning the site.

## Critical

### Create Shared SEO Utilities

Goal: Make metadata consistent and reusable across homepage, blog, and case-study routes.

Description: Move site-wide SEO values into a helper module and use it from route metadata.

Files likely affected:

- `src/app/layout.tsx`
- `src/lib/seo.ts`
- Future route files under `src/app/blog`
- Future route files under `src/app/projects`

Acceptance criteria:

- Default title, description, base URL, OG image, and social handles live in one place.
- Homepage metadata stays equivalent or better than current metadata.
- Future pages can generate metadata without duplicating constants.

Estimated difficulty: Medium

Estimated impact on SEO: High

### Add Contentful Integration Foundation

Goal: Prepare the project for CMS-powered blog content.

Description: Install and configure Contentful API access, define fetch helpers, and create typed mappers for entries.

Files likely affected:

- `package.json`
- `.env.local`
- `next.config.ts`
- `src/lib/contentful.ts`
- `src/types/contentful.ts`

Acceptance criteria:

- Contentful environment variables are documented.
- Fetch helper supports published content.
- Preview/draft support has a planned path.
- Contentful images are configured for `next/image`.

Estimated difficulty: Medium

Estimated impact on SEO: High

### Build Blog Index and Blog Post Routes

Goal: Create the main evergreen content engine for organic traffic.

Description: Add `/blog` and `/blog/[slug]` routes powered by Contentful.

Files likely affected:

- `src/app/blog/page.tsx`
- `src/app/blog/[slug]/page.tsx`
- `src/components/blog/*`
- `src/lib/contentful.ts`
- `src/lib/seo.ts`

Acceptance criteria:

- Blog index lists published posts.
- Blog post pages render Contentful Rich Text.
- Each post has route-specific metadata.
- Each post has canonical URL, OG data, Twitter card, and BlogPosting JSON-LD.
- Empty states are handled cleanly.

Estimated difficulty: High

Estimated impact on SEO: Very High

### Build Project Case Study Routes

Goal: Turn current project proof into crawlable SEO and conversion assets.

Description: Add `/projects/[slug]` pages for detailed case studies.

Files likely affected:

- `src/app/projects/[slug]/page.tsx`
- `src/data/projects.json`
- `src/components/project-section.tsx`
- `src/components/project-details-dialog.tsx`
- `src/components/projects/*`

Acceptance criteria:

- Each current featured project has a stable slug.
- Project cards link to case-study pages.
- Case-study pages include problem, solution, tech stack, architecture, challenges, results, screenshots, and links.
- Metadata and structured data are generated per project.

Estimated difficulty: High

Estimated impact on SEO: Very High

### Expand Sitemap for Dynamic Routes

Goal: Ensure Google can discover new blog and case-study pages.

Description: Update `sitemap.ts` to include Contentful posts and project case studies.

Files likely affected:

- `src/app/sitemap.ts`
- `src/lib/contentful.ts`
- `src/data/projects.json`

Acceptance criteria:

- Homepage remains in sitemap.
- Blog index is included after launch.
- Published blog posts are included.
- Project case-study pages are included.
- `lastModified` is accurate where available.

Estimated difficulty: Medium

Estimated impact on SEO: High

## Important

### Add FAQ Section to Homepage

Goal: Capture long-tail questions and improve conversion clarity.

Description: Add a compact FAQ section near the CTA using the existing dark card style.

Files likely affected:

- `src/app/page.tsx`
- `src/components/FAQ.tsx`
- `src/app/layout.tsx` or `src/lib/schema.ts`

Acceptance criteria:

- FAQ is visible on the homepage.
- Questions answer hiring, services, stack, availability, and project process.
- FAQPage JSON-LD is added only for visible FAQ content.
- Styling follows current component direction.

Estimated difficulty: Low

Estimated impact on SEO: Medium

### Add Testimonials or Proof Section

Goal: Improve trust for recruiters and freelance clients.

Description: Add a section only when real testimonials or attributable proof points are available.

Files likely affected:

- `src/app/page.tsx`
- `src/components/Testimonials.tsx`
- Possible `src/data/testimonials.json`

Acceptance criteria:

- Uses real quotes or credible proof.
- Does not invent client testimonials.
- Fits existing card style.
- Works on mobile and desktop.

Estimated difficulty: Low

Estimated impact on SEO: Medium

### Improve Homepage Image Alt Text

Goal: Improve accessibility and image SEO.

Description: Replace generic alt text with specific, useful descriptions.

Files likely affected:

- `src/components/Hero.tsx`
- `src/components/CTA.tsx`
- `src/components/ProjectMarquee.tsx`
- `src/components/project-section.tsx`

Acceptance criteria:

- Hero image describes Afolabi Ridwan Damilare.
- Project images name the project.
- Decorative images use empty alt only if truly decorative.
- No important image uses vague alt text like `Portrait` or `Decorative`.

Estimated difficulty: Low

Estimated impact on SEO: Medium

### Make Project Content Crawlable

Goal: Avoid important project details being available only in a client-side dialog.

Description: Keep dialogs as quick previews but create real pages for full project detail.

Files likely affected:

- `src/components/project-section.tsx`
- `src/components/project-details-dialog.tsx`
- `src/app/projects/[slug]/page.tsx`

Acceptance criteria:

- Every featured project has an internal URL.
- Cards clearly support the case-study journey.
- External website links remain available.
- Google can crawl the detailed project content.

Estimated difficulty: Medium

Estimated impact on SEO: High

### Add Internal Navigation Links

Goal: Make the growing site easier to crawl and use.

Description: Add Blog and Projects links after those routes exist.

Files likely affected:

- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/app/page.tsx`

Acceptance criteria:

- Navigation remains compact.
- Footer links include Blog and Projects.
- Links use semantic Next.js `Link`.
- Mobile layout does not overflow.

Estimated difficulty: Low

Estimated impact on SEO: Medium

### Add Breadcrumbs to Standalone Pages

Goal: Improve page context for users and search engines.

Description: Add visible breadcrumbs and matching `BreadcrumbList` JSON-LD to blog posts and case studies.

Files likely affected:

- `src/components/Breadcrumbs.tsx`
- `src/app/blog/[slug]/page.tsx`
- `src/app/projects/[slug]/page.tsx`
- `src/lib/schema.ts`

Acceptance criteria:

- Breadcrumbs are visible on standalone pages.
- Breadcrumb links are valid.
- JSON-LD matches visible breadcrumbs.

Estimated difficulty: Low

Estimated impact on SEO: Medium

### Performance Audit Client Boundaries

Goal: Improve Core Web Vitals and reduce unnecessary client JavaScript.

Description: Review whether `src/app/page.tsx` must be fully client-side or if animation logic can move into smaller client components.

Files likely affected:

- `src/app/page.tsx`
- `src/components/*`

Acceptance criteria:

- Static content is server-rendered where practical.
- GSAP behavior remains intact.
- No hydration errors.
- Lighthouse performance does not regress.

Estimated difficulty: Medium

Estimated impact on SEO: Medium

### Clean Frontend Rule Violations During UI Touches

Goal: Align implementation with current project frontend rules.

Description: When editing affected UI components, remove avoidable `tracking-*`, `uppercase`, and `mt-*` or `mb-*` spacing utilities.

Files likely affected:

- `src/components/Hero.tsx`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/components/Stats.tsx`
- `src/components/Services.tsx`
- `src/components/Experience.tsx`
- `src/components/project-details-dialog.tsx`

Acceptance criteria:

- No new `tracking-*` classes are introduced.
- No new forced uppercase classes are introduced.
- Parent-level spacing is preferred.
- Visual identity remains intact.

Estimated difficulty: Low

Estimated impact on SEO: Low

## Nice to Have

### Add Newsletter Signup

Goal: Convert blog traffic into an owned audience.

Description: Add newsletter signup only after there is a real email platform and publishing rhythm.

Files likely affected:

- `src/components/NewsletterSignup.tsx`
- `src/app/api/*`
- Provider-specific integration files

Acceptance criteria:

- Signup has success and error states.
- Email provider is documented.
- Form is accessible.
- No fake or unused signup UI is shipped.

Estimated difficulty: Medium

Estimated impact on SEO: Low

### Add Dynamic OG Image Generation

Goal: Improve social sharing quality for blog posts and case studies.

Description: Generate route-specific OG images using title, category, and brand styling.

Files likely affected:

- `src/app/blog/[slug]/opengraph-image.tsx`
- `src/app/projects/[slug]/opengraph-image.tsx`
- `src/lib/seo.ts`

Acceptance criteria:

- Images render at 1200x630.
- Text fits reliably.
- Brand colors match the site.
- Metadata points to generated images.

Estimated difficulty: Medium

Estimated impact on SEO: Medium

### Add Category and Tag Pages

Goal: Support content discovery after the blog has enough posts.

Description: Add `/blog/category/[slug]` and `/blog/tag/[slug]` only after there is enough content.

Files likely affected:

- `src/app/blog/category/[slug]/page.tsx`
- `src/app/blog/tag/[slug]/page.tsx`
- `src/lib/contentful.ts`

Acceptance criteria:

- Pages are not thin.
- Only categories and tags with meaningful post counts are indexable.
- Thin tag pages can be noindexed until they have enough value.

Estimated difficulty: Medium

Estimated impact on SEO: Medium

### Add Search or Filtering to Blog

Goal: Improve usability once the content library grows.

Description: Add client-side search, category filters, or both when the blog has enough posts.

Files likely affected:

- `src/components/blog/BlogFilters.tsx`
- `src/app/blog/page.tsx`

Acceptance criteria:

- Works without layout shift.
- Does not block indexing of posts.
- Mobile interaction is clear.

Estimated difficulty: Medium

Estimated impact on SEO: Low

### Add Analytics Event Tracking

Goal: Understand which content leads to contact actions.

Description: Track clicks on contact CTA, resume, project links, blog shares, and external social links.

Files likely affected:

- `src/components/ContactDialog.tsx`
- `src/components/Header.tsx`
- `src/components/Footer.tsx`
- `src/components/project-section.tsx`
- Analytics helper file

Acceptance criteria:

- Events are named consistently.
- Tracking does not expose sensitive form content.
- Tracking script performance impact is reviewed.

Estimated difficulty: Low

Estimated impact on SEO: Low
