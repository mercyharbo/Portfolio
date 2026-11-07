# Local release review

Review date: 7 November 2026.

## Completed changes

All five projects use dedicated routes. Legacy project dialogs and their state have been removed, along with unused Skills, Stats, and ContactDialog components. The unused Framer Motion, react-fast-marquee, and Formspree dependencies have been removed from the manifest and lockfiles. The homepage and Work collection render as server components, while navigation, forms, accordions, and scoped motion retain their client boundaries.

The resume and portfolio use the owner's confirmed facts: Lead Frontend Engineer at OpenRoleHQ and Adaptibles from November 2025; HRIS from September 2025 to March 2026; BeautySpace ending in 2025. The unspecified BeautySpace end month is deliberately omitted. Adaptibles describes the website, learner/instructor dashboards, and separate admin portal, and stays out of Work.

Original media, SwiftLink's fictional-data labels, native-resolution HRIS capture, the requested Leban Street mockup, public-link availability labels, contact API, and analytics integration remain.

## Validation

- TypeScript (`npx tsc --noEmit`), targeted ESLint, and the Next.js production build passed.
- All four contact-request unit tests passed with mocked fetch responses.
- Local production browser checks passed for all nine pages at 1440, 768, 390, and 320px widths: one primary heading, canonical URL, no horizontal overflow, visible media loading, explicit project order, complete gallery counts, and matching live-link destinations.
- Keyboard checks covered menu focus containment, Escape and restored trigger focus, repeated client navigation, the original-image link, and accordion activation. Reduced-motion headings remained visible on all nine pages. Scoped GSAP cleanup and accordion refresh were reviewed in source.
- Contact checks used fictional input and intercepted `/api/send`: required/email validation, focus feedback, disabled submitting state, duplicate prevention, preserved input after a mocked 503, retry, success, and form reset passed. No real email was submitted. The mocked 503 produced the expected resource error; no unexpected runtime or console errors remained.
- The sitemap includes the four main destinations and all five projects. Original gallery image URLs and the PDF download responded successfully locally. Project links remain available with JavaScript disabled.
- Desktop and mobile screenshots were captured; Work and About compositions were visually reviewed. HRIS does not enlarge past its native 876px width. SwiftLink retains all four images and its fictional-data label. The resume was separately rendered and reviewed as two readable pages with the confirmed facts and working PDF link annotations.
- Source checks found no remaining project-dialog callbacks or references to removed dependencies. Current documentation describes the redesign; superseded plans are preserved in `docs/archive/`.

The browser harness is kept outside the repository in the task visualization directory. Its visibility checks skip alternate portraits hidden by responsive layout, and menu checks wait for actual focus transfer and transition completion.

## Publishing boundary

Commit and push are authorized. Deployment, merge into the production branch, and a real contact-email delivery test require separate instructions. Local checks do not prove the state of the hosted site or its external project links.
