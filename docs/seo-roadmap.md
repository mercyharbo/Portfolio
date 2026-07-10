# CodeWithMercy SEO Roadmap

This roadmap is based on the current Next.js App Router portfolio in this repository. The site is currently a single-page portfolio with global metadata, `robots.ts`, `sitemap.ts`, a `ProfilePage` JSON-LD block, local project data, and homepage sections for Hero, Stats, About, Project Marquee, Services, Featured Projects, Experience, and Contact CTA.

The goal is to improve search visibility without redesigning the website. The homepage should remain the primary portfolio page, while blog posts and project case studies become the main standalone SEO assets.

## Phase 1: Technical Foundation

### Metadata

- [ ] Create a shared SEO configuration file for site name, base URL, default title, default description, social handles, and default OG image.
- [ ] Replace hard-coded metadata strings in `src/app/layout.tsx` with reusable constants.
- [ ] Add a title template such as `%s | CodeWithMercy`.
- [ ] Keep the homepage title focused on the personal brand and primary role.
- [ ] Add route-specific metadata when blog and case-study routes are introduced.
- [ ] Keep meta descriptions natural, specific, and under roughly 155-160 characters.

Likely files:

- `src/app/layout.tsx`
- `src/lib/seo.ts`
- Future `src/app/blog/[slug]/page.tsx`
- Future `src/app/projects/[slug]/page.tsx`

### Canonical URLs

- [ ] Keep homepage canonical as `/`.
- [ ] Add canonical URLs for every blog post and case study.
- [ ] Use stable slugs from Contentful for blog posts.
- [ ] Use stable project slugs for case studies.
- [ ] Avoid duplicate public versions of the same content.

### Open Graph and Twitter Cards

- [ ] Keep the current default OG image in `public/og-image.png`.
- [ ] Add dynamic or CMS-driven OG images for blog posts.
- [ ] Add project-specific OG images for case studies.
- [ ] Use `summary_large_image` for Twitter cards.
- [ ] Add meaningful image alt text for every OG image.

### Robots

Current file: `src/app/robots.ts`

- [x] Allow public site crawling.
- [x] Disallow `/api/`.
- [x] Link to sitemap.
- [ ] Confirm the production domain is final: `https://codewithmercy.codes`.
- [ ] Add disallow rules only if private preview or admin routes are introduced.

### Sitemap

Current file: `src/app/sitemap.ts`

- [x] Homepage is included.
- [ ] Add static project case-study URLs after routes are created.
- [ ] Add dynamic blog URLs from Contentful.
- [ ] Include `lastModified` from Contentful `updatedAt`.
- [ ] Use reasonable `changeFrequency` values:
  - Homepage: `monthly`
  - Blog index: `weekly`
  - Blog posts: `monthly`
  - Case studies: `monthly`
- [ ] Set priorities intentionally:
  - Homepage: `1.0`
  - Case studies: `0.8`
  - Blog index: `0.7`
  - Blog posts: `0.6`

### Structured Data

Current file: `src/app/layout.tsx`

- [x] Add Person/ProfilePage structured data.
- [ ] Move JSON-LD generation into a reusable helper.
- [ ] Add `WebSite` structured data for the whole site.
- [ ] Add `BreadcrumbList` for blog posts and case studies.
- [ ] Add `BlogPosting` schema for each blog post.
- [ ] Add `CreativeWork` or `SoftwareApplication` schema for case studies where appropriate.
- [x] Add `FAQPage` schema only if a visible FAQ section exists on the page.
- [ ] Keep structured data aligned with visible page content.

### Breadcrumbs

- [ ] Add visible breadcrumbs on blog post pages.
- [ ] Add visible breadcrumbs on case-study pages.
- [ ] Do not add breadcrumbs to homepage sections.
- [ ] Add matching `BreadcrumbList` JSON-LD on standalone pages.

### Crawlability

- [ ] Ensure standalone pages use real routes, not only dialogs.
- [ ] Convert detailed project content from dialog-only content into crawlable `/projects/[slug]` pages.
- [ ] Keep the homepage project cards, but link each card to its case study.
- [ ] Keep external project links visible, but make the internal case study the primary SEO destination.
- [ ] Avoid hiding important copy behind client-only interactions when it should be indexed.

## Phase 2: Homepage SEO Improvements

The homepage should remain a single-page portfolio. Improve it by strengthening existing sections rather than creating unnecessary standalone pages.

- [x] Add concise section copy under Services to target service-intent keywords naturally.
- [x] Add a small FAQ section near the CTA.
- [ ] Add testimonials or proof points if real quotes are available.
- [ ] Add a newsletter/social follow section only if there is a real publishing workflow.
- [x] Improve image alt text:
  - Hero image should describe the person, not just `Portrait`.
  - CTA image should not use `Decorative` if it communicates brand/personality.
  - Project marquee images should name the actual project.
- [ ] Keep current dark blue and primary blue visual identity.
- [ ] Avoid redesigning the layout.

Likely files:

- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/Services.tsx`
- `src/components/Stats.tsx`
- `src/components/project-section.tsx`
- `src/components/ProjectMarquee.tsx`
- `src/components/CTA.tsx`
- Future `src/components/FAQ.tsx`
- Future `src/components/Testimonials.tsx`

## Phase 3: Blog SEO

The blog should use Contentful, not MDX.

- [ ] Create Contentful models for posts, categories, tags, authors, and reusable SEO fields.
- [ ] Create `/blog` index route.
- [ ] Create `/blog/[slug]` route.
- [ ] Add category and tag pages only when enough posts exist to justify them.
- [ ] Add related posts based on category and tags.
- [ ] Add reading time calculation.
- [ ] Render Contentful Rich Text with accessible headings, links, lists, images, and code blocks.
- [ ] Add social sharing buttons for X, LinkedIn, and copy link.
- [ ] Add pagination once there are more than 9-12 posts.

## Phase 4: Case Study SEO

- [ ] Add `/projects/[slug]` route for detailed case studies.
- [ ] Expand project data beyond title, description, image, location, categories, tech stack, notes, and website.
- [ ] Include problem, solution, architecture, challenges, performance, lessons learned, screenshots, and links.
- [ ] Use project-specific metadata and OG images.
- [ ] Add internal links from case studies to relevant blog posts and services.
- [ ] Add links from homepage cards to case studies.

## Phase 5: Performance

- [ ] Run Lighthouse before and after each major SEO/UI addition.
- [ ] Audit `use client` boundaries. Current `src/app/page.tsx` is client-side because of GSAP. Consider moving animation orchestration into a client wrapper so static section content can remain server-rendered where practical.
- [ ] Keep `next/image` for all local and Contentful images.
- [ ] Add Contentful image domain configuration when CMS images are introduced.
- [ ] Set proper `sizes` attributes for large images.
- [ ] Avoid loading animation libraries on routes that do not need them.
- [ ] Review the third-party analytics script for impact on LCP and INP.
- [ ] Use static generation or ISR for blog posts and case studies.

## Phase 6: Accessibility

- [ ] Review heading hierarchy after adding FAQ, testimonials, blog, and case-study pages.
- [ ] Improve non-specific image alt text.
- [ ] Ensure contact dialog has accessible validation and error messages.
- [ ] Ensure keyboard users can open, submit, and close the contact dialog.
- [ ] Ensure project cards have clear link semantics when case-study pages are added.
- [ ] Avoid text smaller than `text-xs`.
- [ ] Remove forced uppercase and tracking utility classes during UI cleanup unless there is a strong design reason.
- [ ] Confirm color contrast for gray text on dark backgrounds.

## Phase 7: Internal Linking

- [ ] Add homepage links to top case studies.
- [ ] Add homepage link to blog index once the blog exists.
- [ ] Link blog posts to related case studies.
- [ ] Link case studies to related service areas.
- [ ] Link case studies to relevant blog posts.
- [ ] Add footer links for Blog, Projects, GitHub, LinkedIn, X, and Contact.
- [ ] Keep the main navigation compact so the single-page portfolio still feels focused.

## Google Search Console Checklist

- [ ] Verify ownership for `https://codewithmercy.codes`.
- [ ] Submit `https://codewithmercy.codes/sitemap.xml`.
- [ ] Inspect homepage URL after deployment.
- [ ] Inspect first blog post URL after launch.
- [ ] Inspect first case-study URL after launch.
- [ ] Monitor indexing status weekly for the first month after launch.
- [ ] Review Core Web Vitals report monthly.
- [ ] Review search queries and add content for terms with impressions but low clicks.
- [ ] Fix any 404s or redirect issues.
- [ ] Confirm canonical URLs are being selected correctly by Google.

## Long-Term SEO Maintenance

- [ ] Publish 2-4 high-quality posts per month.
- [ ] Add at least one detailed case study per major project.
- [ ] Refresh homepage proof points every quarter.
- [ ] Update case studies after meaningful product results.
- [ ] Re-run Lighthouse and accessibility checks after every major design or content addition.
- [ ] Use Google Search Console data to decide future blog topics.
