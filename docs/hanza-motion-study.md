# Hanza motion study and implementation brief

Studied: 6 November 2026. Scope: research and documentation only; no application or dependency changes.

Reference: https://hanza-template.framer.website/

Template listing: https://www.framer.com/marketplace/templates/hanza/

## Evidence and limits

Inspected the live homepage in the in-app browser at its default desktop viewport (approximately 1265 x 712) and a 390 x 844 mobile viewport. Scrolled through the homepage, opened and closed desktop/mobile navigation, expanded service and FAQ rows, and followed the featured project link to `/portfolio/ikigai`. Restored the default viewport afterwards.

Evidence comes from successive screenshots, rendered DOM structure, inline animation styles, video attributes, and computed sticky positioning. This is a reconstruction brief, not the template's Framer source. Numerical animation timings below are proposed starting values, not measured original settings. No frame-rate recording or exact easing extraction was available. Pointer hover choreography, first-load sequencing, and route transition frames need a dedicated follow-up pass before claiming exact fidelity.

## What gives this design its character

The motion works with a disciplined vertical grid, alternating light and dark sections, large typography, small orange markers, restrained borders, and full-width project imagery. Applying these effects to the existing rounded blue cards would not reproduce Hanza. Rebuild the layout first, then its motion.

The desktop flow observed is: moving hero, moving client-logo strip, biography and statistics, selected projects, dark services and process, light testimonials and metrics, dark featured case study, light pricing and FAQ/blog, then dark contact/footer.

For this portfolio, retain the design rhythm but use actual engineering work, career history, services, and substantiated proof. The demo's pricing, client names, ratings, metrics, availability, and testimonials are not portfolio content.

## Motion inventory

| Surface | Observed behaviour and evidence | Implementation approach | Confidence / remaining check |
| --- | --- | --- | --- |
| Hero background | The warm abstract background changes over time without scrolling. The rendered homepage includes an autoplaying, muted, looping MP4. | A cover video with a poster, muted autoplay, loop and inline playback. GSAP can control entrances; it does not create the media itself. | High for looping video; exact original media treatment and playback conditions need comparison. |
| Hero composition | Desktop places utility navigation above a large lower-right wordmark, supporting copy/services around the middle, and social proof at lower left. Hero exits into a white logo band. | Reproduce the spatial layout with grid; use one entry timeline for its independent elements. | Layout confirmed; precise entrance order, duration, and hero parallax are unmeasured. |
| Logo band | Logos change horizontal position between observations; mobile crops the moving strip inside the viewport. | Seamless duplicated track with a linear CSS animation or GSAP loop. Hide duplicate content from assistive technology. | Continuous movement confirmed; exact speed/direction should be sampled. |
| Biography | Later words are pale while earlier words are dark. Further scrolling progressively darkens the passage. | Split into words, then scrub opacity or color with ScrollTrigger across the text block. | High for progressive reading treatment; exact start/end positions and reverse behaviour need tuning. |
| Profile beside biography | Portrait/profile remains visible beside successive portions of the long biography and statistics on desktop. | Start with CSS sticky within its section. Use pinning only if reference comparison demonstrates a need. | Holding behaviour visually observed; the biography profile's precise positioning mechanism is not confirmed. |
| Large section headings | Text is composed of individual character spans grouped within words. Hidden characters have inline opacity `0.001` and `translateY(20px)`; completed characters have opacity `1` and no transform. Screenshots show absent/faint titles becoming readable. | Character stagger from `y: 20, autoAlpha: 0` to neutral. Preserve words and intended line breaks. Use an accessible unsplit text label. | High for initial/end states and character structure. Stagger, trigger threshold, and replay policy remain estimates. |
| Supporting section copy | Several intro paragraphs also have character spans. Muted and bright text coexist after animation. | Reuse a text-reveal primitive while keeping intentional muted emphasis separate from animated opacity. | Structure confirmed; do not accidentally animate all text to one color. |
| Statistic numbers | DOM initially contains zero values and settled screenshots show populated values such as `35+`, `84+`, and `31+`. Multiple numeral layers occur in the DOM. | Counter or clipped numeral transition, using real portfolio values. | Initial/final values confirmed; an odometer versus numeric count-up and its exact duration are not established. |
| Project panels | Three large image-backed project sections appear in sequence with metadata, a smaller image/CTA at left, and description/categories at right. Full-width imagery carries the visual transition. | Layer background and foreground media in an overflow-hidden section. Only add scroll-linked media movement after comparing movement against scroll. | Composition confirmed. A pinned stack, image zoom, and parallax amplitude are not proven and must not be assumed. |
| Services | Collapsed numbered rows expand into a substantial detail panel. Open state has an orange top rule, marker, larger content and a changed plus/close icon. Expansion moves later sections down. | Accessible accordion with animated height, content opacity, icon rotation and active border. Refresh ScrollTrigger after layout changes. | Open/closed states confirmed; exact easing, duration and whether multiple rows may remain open need a controlled recheck. |
| Process | Numbered cards occupy vertically offset columns on desktop; later cards continue below them. Mobile presents the process in a vertical flow. | Build the offset grid as layout first. Add modest entry reveals rather than assuming a horizontal pinned sequence. | High for composition; scroll-linked column transforms are not confirmed. |
| Testimonials | Intro and CTA sit beside offset testimonial columns. Computed desktop style confirms intro column `position: sticky; top: 64px`. | CSS sticky for intro, independent card reveals for testimonials. | Sticky value confirmed. Different scroll speeds between testimonial columns are unverified. |
| Featured outcome | Dark split section combines quotation, numerical outcomes, project link, and large project imagery. | Reuse text reveal/counter primitives and the media layout. | Composition confirmed; exact image movement needs follow-up. |
| Pricing | Three columns begin at visibly different vertical positions, followed by a compact booking block. | Reproduce offsets through grid layout; use restrained entrance motion. | Composition confirmed. Commercial packages are optional content, not required for an engineer portfolio. |
| FAQ | One answer is open initially. Selecting another row reveals its answer and collapses the previous answer. Active row has an orange top rule. Desktop intro column has computed sticky top `64px`. | Reuse the accordion primitive with a single-open state and a sticky intro. | Behaviour and sticky value confirmed. Plus/close rotation angle and animation duration remain to be measured. |
| Navigation overlay | Desktop opens a dark panel below Menu, with links/profile on the left and two project images on the right. Page behind it becomes blurred and dimmed. The panel is not a full-screen desktop menu. | Animate panel and backdrop separately. Use a dialog-like focus model, Escape handling, focus return and background inertness. Scope blur to the background layer. | Desktop/mobile open and closed states confirmed. Reveal origin and exact panel trajectory need a slower capture. |
| Small text links | Rendered links such as All Projects, See Project and Book a Call contain two copies of the same label. | Likely a clipped rolling-label hover treatment. Prototype two visual layers with only one accessible name. | Inferred from DOM; hover direction, arrow travel and timing have not been directly verified. |
| Page navigation | Featured See Project navigates to `/portfolio/ikigai`, which opens with image-led project hero, metadata, project name and an All Projects link. | Real Next.js routes and case-study content; animate destination entry separately. | Destination confirmed. A crossfade, wipe, shared-element morph or persistent route overlay was not established. |
| Contact/footer | Dark contact section repeats the profile, large heading and intro animation language alongside a form. | Reuse shared components and the existing contact submission implementation. | Layout confirmed; no form was submitted and remote validation was not tested. |

## Mobile differences observed

- At 390 x 844, branding sits upper-left and Menu upper-right.
- Clock, desktop start-project CTA, service list, and lower-left hero proof are absent from the mobile first view.
- Hero is a shorter composition: statement above large branding, followed immediately by the logo band.
- Menu is a narrow right-aligned dark panel with navigation/profile/social links. Desktop project thumbnails are absent. Background blur/dimming remains.
- Biography starts in one column with the progressive reading effect; the desktop side-by-side portrait composition is absent there.
- Project sections retain image-backed presentation but simplify metadata into the narrow layout; the desktop inset image is absent in the inspected first project view.
- Service rows remain accordions. Process cards become a vertical flow.
- Exact breakpoint thresholds, tablet behaviour, touch hover fallbacks, and mobile bottom-of-page sections were not exhaustively checked.

## Proposed GSAP starting values

These are tuning proposals. They must be compared visually with the reference before being called a match.

| Motion | Starting parameters |
| --- | --- |
| Character reveal | `y: 20`, opacity `0 → 1`, duration `0.6–0.8s`, stagger `0.02–0.035s`, `power3.out`, start around `top 85%` |
| Small content entrance | `y: 16–24`, duration `0.5–0.7s`, stagger around `0.08s` |
| Biography reading | word opacity roughly `0.2 → 1`, `ease: none`, scrub around `0.3`, map from block entering lower viewport to its end reaching mid/upper viewport |
| Menu/backdrop | panel `0.4–0.6s`, short link stagger; backdrop `0.25–0.4s`; choose origin after verifying reference frames |
| Accordion | height `0.35–0.5s`, content fade `0.2–0.3s`; animate close/open symmetrically |
| Rolling link, if verified | clipped text shift by one line over `0.25–0.35s`; equivalent keyboard focus state |
| Counter | `1–1.5s` on entry; numeral treatment selected after verification |

Do not add smooth-scroll middleware, a custom cursor, magnetic buttons, bouncing effects, global page wipes, or pinned project stacks without evidence. Browser scrolling felt eased between captures, but that does not establish Lenis or ScrollSmoother usage.

## Existing portfolio readiness

- `package.json` declares `gsap: ^3.13.0`; installed version inspected is `3.13.0`. GSAP does not need reinstalling for the study or a basic implementation.
- `src/app/page.tsx` already registers ScrollTrigger and animates project sections from `y: 60`, opacity zero with a `0.8s` tween. Its effect currently has no animation cleanup, so it should be replaced with a scoped lifecycle during implementation.
- Current components mix Framer Motion entrances with GSAP. Avoid assigning both engines to the same element's transform/opacity. Prefer one GSAP motion layer for the redesigned surfaces.
- `@gsap/react` is not declared. It is an optional future addition for lifecycle cleanup; `gsap.context()` and `context.revert()` can also provide cleanup without a new dependency.
- Narrow plugin imports are preferable to the current `gsap/all` import. ScrollTrigger provides triggers, scrub and pinning; sticky layout should remain CSS where sufficient.
- SplitText is a potential implementation tool, not a requirement. Small custom word/character wrappers can reproduce this effect if word wrapping, screen-reader output and font reflow are handled correctly.

GSAP references:

- https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- https://gsap.com/resources/React/

## Suggested implementation structure

Keep the page shell and content server-renderable; isolate browser animation setup in a scoped client component.

- `PortfolioMotion`: one scoped GSAP context, reduced-motion matching, refresh/cleanup and responsive media handling.
- `RevealText`: character entrance mode and scroll-reading word mode; consistent accessible text and word boundaries.
- `ProfileCard`: shared biography/footer portrait treatment and real contact links.
- `ProjectPanel`: reusable image-led featured project with metadata and case-study route.
- `AnimatedAccordion`: reusable service/FAQ controls with semantic buttons and controlled panels.
- `RollingLink`: only after hover behaviour is verified; never duplicate screen-reader announcements.
- `NavigationMenu`: desktop/mobile layouts, panel/backdrop timelines and complete keyboard handling.

This structure is proposed, not created by this study.

## Build order

1. Create the responsive grid, section sequence, typography, orange/gray palette, media framing and real portfolio content.
2. Prepare the hero video/poster and project media. Match the reference's visual weight with usable assets; motion alone will not recreate its atmosphere.
3. Implement text reveals, biography scrub and CSS sticky regions.
4. Implement navigation, accordions and verified link hover details.
5. Add counters, logo loop and any project-media movement supported by a further reference pass.
6. Implement real case-study navigation and tune page entrances after studying the route transitions more closely.
7. Compare desktop, tablet and mobile motion at fixed scroll landmarks; check reduced motion and keyboard interaction.

## Acceptance checks for the eventual build

- No `mt-*`, `mb-*`, `tracking-*`, `zinc-*`, or text below `text-xs` in the new frontend. Use parent gap/grid spacing. Preserve natural casing, with uppercase only where deliberately following the supplied reference design.
- Header/menu, hero proportions, grid lines, dark/light section rhythm, profile placement, project framing and title line breaks match the approved direction.
- Heading characters start 20px below their final position without causing layout movement or broken words.
- Biography progress responds to scrolling at a readable pace and remains fully readable with reduced motion.
- Sticky regions release at section boundaries and do not obscure content or controls.
- Accordions stay correctly measured after resize, font/media load and repeated toggles.
- Navigation returns focus, supports Escape, and prevents focus reaching the obscured background.
- Mobile does not inherit desktop pin distances, overflow or hidden essential content.
- Animations clean up on unmount and survive React development effect re-runs without duplicate triggers.
- Important content remains visible if animation initialization fails; reduced-motion mode removes unnecessary transforms, scrubbing and continuous loops.
- Videos have posters and stable dimensions; no audio autoplay or unnecessary preload of offscreen media.
- Real submission/resume/project links work, and metadata, semantic headings and screen-reader text remain intact.

## Outstanding fidelity questions

Before claiming an exact recreation, inspect isolated hover states, first-load frames, menu open/close trajectory, scrolling backwards through text reveals, numeral transition frames, project background movement, route transition frames, and tablet layouts. Exact Framer easing values remain unknown without the editable template. The evidence above is sufficient to plan the architecture and layout, but not to promise a frame-identical clone.
