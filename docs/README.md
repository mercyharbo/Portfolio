# Codewithmercy portfolio

The current portfolio uses Next.js App Router, React, Tailwind CSS, and scoped GSAP motion in black, white, and red. Local JSON and TypeScript hold the content; no CMS is required.

## Current scope

- Main destinations: Home, Work, About, and Contact, with visible resume access.
- Homepage flow: hero, introduction, selected work, services, process, experience, FAQ, and contact invitation.
- Featured order: Leban Street, PAWEN, SwiftLink.
- Work order: the featured three, OpenRoleHQ, then HRIS. Each project has a dedicated `/work/{slug}` page.
- Adaptibles appears in Experience only. No Work card, Blog, Lab, pricing, or unverified testimonials are included.
- Brand spelling: Codewithmercy.

## Source of truth

- `src/data/projects.json`: project descriptions, roles, technologies, live links, required detail paths, and image metadata.
- `src/data/project-stories.ts`: concise engineering stories for the five project pages.
- `src/data/experience.json`: confirmed roles and dates, including the expanded Adaptibles website and admin work.
- `src/lib/projects.ts`: explicit collection and featured ordering.
- `src/lib/seo.ts`: shared metadata and structured data. `src/app/sitemap.ts` includes the four main destinations and five projects.
- `public/Afolabi Ridwan Damilare.pdf`: current website download. The matching reviewed PDF and editable text are in `output/pdf/`.

## Interaction and delivery

Project actions link directly to completed routes. The header menu provides keyboard focus handling and Escape dismissal. Services and FAQs use shared accordions. GSAP is scoped and cleaned up on unmount, respects reduced motion, and refreshes after accordion layout changes. Essential text stays present in the server-rendered page.

Contact uses the existing `/api/send` contract: name, email, message, and `website_hp`. The shared request helper and form preserve visitor input after failures and prevent duplicate submissions. Automated checks mock email delivery; real email submission requires separate explicit authorization.

Analytics remain installed. Local automated browser checks intercept the external analytics request to avoid recording test activity.

## Review and references

- [Release review](release-review.md): current checks and publishing boundary.
- [Project media](project-media.md): image provenance, fictional SwiftLink data, and contribution boundaries.
- [Motion reference study](hanza-motion-study.md): observed reference behavior and unmeasured tuning choices.
- [Hero artwork](hero-art-direction.md): approved asset and deliberate adaptations.
- [Archived plans](archive/README.md): historical directions that no longer define implementation scope.

Run `npm run dev` for development or `npm run build` followed by `npm start -- --port 3001` for production preview. No deployment or merge is part of this cleanup.
