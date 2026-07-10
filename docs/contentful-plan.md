# CodeWithMercy Contentful Plan

The blog should use Contentful as the long-term CMS. Do not build an MDX blog for this project.

## Goals

- Manage blog content without code changes.
- Support Rich Text, featured images, SEO fields, categories, tags, authors, related posts, and draft preview.
- Keep the frontend maintainable and strongly typed.
- Support future scale without needing to replace the content architecture.

## Content Models

### Blog Post

Fields:

- `title`
  - Type: Short text
  - Required: Yes
- `slug`
  - Type: Short text
  - Required: Yes
  - Validation: Unique
- `excerpt`
  - Type: Long text
  - Required: Yes
  - Use: Blog cards, metadata fallback
- `content`
  - Type: Rich Text
  - Required: Yes
- `featuredImage`
  - Type: Media
  - Required: Yes
- `featuredImageAlt`
  - Type: Short text
  - Required: Yes
- `category`
  - Type: Reference to Category
  - Required: Yes
- `tags`
  - Type: References to Tag
  - Required: No
- `author`
  - Type: Reference to Author
  - Required: Yes
- `relatedPosts`
  - Type: References to Blog Post
  - Required: No
- `seo`
  - Type: Reference to SEO Fields
  - Required: No
- `publishedDate`
  - Type: Date and time
  - Required: Yes
- `updatedDate`
  - Type: Date and time
  - Required: No
- `readingTime`
  - Type: Number
  - Required: No
  - Note: Can be calculated in code instead of manually entered.
- `isFeatured`
  - Type: Boolean
  - Required: No

### Category

Fields:

- `name`
  - Type: Short text
  - Required: Yes
- `slug`
  - Type: Short text
  - Required: Yes
  - Validation: Unique
- `description`
  - Type: Long text
  - Required: No
- `seo`
  - Type: Reference to SEO Fields
  - Required: No

Recommended initial categories:

- React
- Next.js
- TypeScript
- Tailwind CSS
- Frontend Architecture
- Performance
- Accessibility
- AI
- Career
- Productivity
- Building Products

### Tag

Fields:

- `name`
  - Type: Short text
  - Required: Yes
- `slug`
  - Type: Short text
  - Required: Yes
  - Validation: Unique

Recommended initial tags:

- React Hooks
- App Router
- Core Web Vitals
- Server Components
- Type Safety
- UI Engineering
- Developer Workflow
- AI Tools
- Portfolio
- Freelancing

### Author

Fields:

- `name`
  - Type: Short text
  - Required: Yes
- `slug`
  - Type: Short text
  - Required: Yes
  - Validation: Unique
- `role`
  - Type: Short text
  - Required: No
- `bio`
  - Type: Long text
  - Required: Yes
- `avatar`
  - Type: Media
  - Required: No
- `avatarAlt`
  - Type: Short text
  - Required: No
- `githubUrl`
  - Type: Short text
  - Required: No
- `linkedInUrl`
  - Type: Short text
  - Required: No
- `xUrl`
  - Type: Short text
  - Required: No
- `websiteUrl`
  - Type: Short text
  - Required: No

Default author:

- Name: Afolabi Ridwan Damilare
- Slug: `afolabi-ridwan-damilare`
- Role: Frontend Engineer

### SEO Fields

Fields:

- `metaTitle`
  - Type: Short text
  - Required: No
  - Recommended max: 60 characters
- `metaDescription`
  - Type: Long text
  - Required: No
  - Recommended max: 155-160 characters
- `canonicalUrl`
  - Type: Short text
  - Required: No
- `ogTitle`
  - Type: Short text
  - Required: No
- `ogDescription`
  - Type: Long text
  - Required: No
- `ogImage`
  - Type: Media
  - Required: No
- `ogImageAlt`
  - Type: Short text
  - Required: No
- `noIndex`
  - Type: Boolean
  - Required: No
  - Default: False

## API Integration

Recommended files:

- `src/lib/contentful.ts`
- `src/types/contentful.ts`
- `src/lib/contentful-mappers.ts`
- `src/lib/reading-time.ts`

Recommended environment variables:

- `CONTENTFUL_SPACE_ID`
- `CONTENTFUL_ENVIRONMENT`
- `CONTENTFUL_ACCESS_TOKEN`
- `CONTENTFUL_PREVIEW_ACCESS_TOKEN`
- `CONTENTFUL_PREVIEW_SECRET`

Implementation notes:

- Use the Contentful Delivery API for published content.
- Use the Preview API only for draft preview routes.
- Map raw Contentful entries into clean local types before rendering.
- Keep route components focused on rendering, not raw CMS shape handling.
- Treat slugs as the source of truth for public URLs.

## Fetching Strategy

### Blog Index

- Fetch published posts ordered by `publishedDate` descending.
- Limit initial page to 9 or 12 posts.
- Add pagination after content count grows.
- Include category, tags, author, featured image, slug, excerpt, and dates.

### Blog Post

- Fetch by exact slug.
- Return `notFound()` if no published entry exists.
- Fetch related posts from explicit `relatedPosts` first.
- If explicit related posts are empty, fallback to same category or shared tags.

### Category and Tag Pages

- Delay implementation until there are enough posts.
- Use noindex for thin tag pages if needed.
- Add indexable category pages only when the category has meaningful content.

## Caching

Recommended approach:

- Use static generation for published blog posts.
- Use ISR or tag-based revalidation for content updates.
- Use Contentful `updatedAt` for sitemap `lastModified`.
- Avoid fetching Contentful content client-side for primary page content.

Possible implementation:

- Use `fetch` with `next: { revalidate: 3600 }`.
- Use cache tags when the project has webhook-based revalidation.
- Add a Contentful webhook later to revalidate changed content.

## Image Optimization

- Configure Contentful image host in `next.config.ts`.
- Render featured images with `next/image`.
- Always require meaningful `featuredImageAlt`.
- Use Contentful image transforms for width, quality, and format where useful.
- Use appropriate `sizes` attributes on cards and article hero images.
- Avoid uploading oversized uncompressed images.

## Preview Mode and Draft Support

Preview goals:

- View draft posts before publishing.
- Keep draft content out of the public sitemap.
- Keep preview URLs protected by a secret.

Recommended routes:

- `src/app/api/preview/route.ts`
- `src/app/api/exit-preview/route.ts`

Acceptance criteria:

- Preview route validates `CONTENTFUL_PREVIEW_SECRET`.
- Preview mode fetches from Contentful Preview API.
- Published mode never exposes draft-only content.
- Draft pages use noindex.

## Rich Text Rendering

Support:

- Paragraphs
- Headings
- Lists
- Links
- Embedded images
- Code blocks or code-styled text
- Block quotes

Rendering rules:

- Preserve semantic heading order.
- Add accessible link styles.
- Use `next/image` for embedded assets.
- Add syntax highlighting only if needed.
- Keep article typography readable within the existing dark theme.

## Social Sharing

Add sharing on blog posts:

- X
- LinkedIn
- Copy link

Rules:

- Use the canonical URL.
- Do not block reading experience.
- Keep buttons compact and accessible.

## Future Scalability

- Add `Series` model if multi-part tutorials become common.
- Add `Newsletter Issue` model only after newsletter publishing is consistent.
- Add `Resource` model if downloadable guides or tools are added.
- Add content webhooks for revalidation after the first CMS version is stable.
- Add search only when the post library is large enough to need it.
