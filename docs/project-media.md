# Project media refresh

The homepage features Leban Street, PAWEN, and SwiftLink. Work also includes OpenRoleHQ and HRIS. Adaptibles remains in Experience only. All five projects have dedicated routes: `/work/leban-street`, `/work/pawen`, `/work/swiftlink`, `/work/openrolehq`, and `/work/hris`.

## Sources

- Leban Street: the owner requested restoring the original `public/leban-street.jpg` mockup as the cover. An optimized WebP preserves that composition; the original remains available at full resolution. The public catalogue capture from https://www.lebanstreet.com/ is retained as a supporting image on the dedicated page.
  The expanded operations story was checked against the local Leban Street frontend: kitchen batch preparation and readiness, sales batch details and kitchen handoff, inventory stock/raw-material/wastage interfaces, and admin order/revenue/cost/profit reporting. It describes frontend contributions and capabilities without publishing operational data or numerical business results.
- PAWEN: public homepage and three-experience section at https://thepawenawards.org/. Public consent and chat invitation overlays were dismissed before capture. Full frontend implementation was confirmed by the portfolio owner; technologies were checked against the local project manifest.
  The dedicated page's story was checked against local event pages, Contentful loaders, multi-step nomination and event forms, Jotform submission adapters, the travel page, Nviti helpdesk components, and analytics consent controls. It describes third-party services as integrations without claiming ownership of their infrastructure or publishing event attendance or conversion results.
- OpenRoleHQ: original flat dashboard screenshot from `public/project (2).png`. Its candidate deployment was paused during reference review, so no new candidate-dashboard capture was substituted.
  The expanded frontend story was checked against local authentication/onboarding routes, candidate profile and application pages, AI writing tools, extension connection UI, Dodo Payments billing, public collection submissions, Contentful articles, and main/applicant routing. It does not claim ownership of AI models, the extension autofill engine, backend services, or the separately linked recruiter portal.
- HRIS: original flat screenshot from `public/project (1).png`, with the account toolbar cropped out. Its native 876px width is retained.
  The dedicated frontend story was checked against employee/admin routes, invitation and public registration, multi-step staff records, bulk-entry hooks, document upload/download, leave review, exit and clearance flows, SWR/Axios request handling, and API-backed Recharts reporting. It describes frontend implementation without claiming backend ownership, payroll processing, numerical outcomes, or unconnected export/date-filter controls. No authenticated HR data was accessed; the existing screenshot is preserved.
- SwiftLink: actual application components rendered in a separate local copy. No authenticated production screenshots were used. Customer captures use a 390 × 844 viewport at 2× pixel density; the admin view uses 1440 × 1000, with a full-page original for the detail page.
  The expanded project story was checked against the Next.js API proxy, Express routes and services, wallet operations, webhook and reconciliation code, customer purchase/history/support flows, receipt exports, PWA components, and admin management/reporting. These describe implemented engineering capabilities, not a production reliability audit or certification. The self-initiated positioning and fictional-data gallery remain.

## SwiftLink capture isolation

The temporary capture copy and automation live outside the portfolio repository in the task's visualization directory. No environment files or live session cookies were copied. The preview uses a fictional session signing key, dummy credentials, fixture API responses, empty saved recipients, and blocked external server networking. Browser API requests were intercepted; transaction mutations never reached a backend. The original SwiftLink project was not edited.

All displayed names, balances, activity, and business metrics in these captures are fictional. This is stated beside covers and in the gallery. Capture fixtures are not part of the production app or its bundles. The isolated preview was stopped after capture.

## Presentation

Optimized WebP assets and their PNG originals live under `public/images/projects`. Dimensions, alternative text, captions, and original-image links are held with project data. Covers fit their containers without discarding important controls; detail figures preserve the whole capture and expose a keyboard-accessible full-resolution link. Smaller images are not enlarged beyond their native width.

The approved black, white, and red identity and scoped GSAP motion remain. Interface imagery uses flat captures without added device frames, with the owner's requested exception for Leban Street's original mockup. HRIS now links to its dedicated page and states that its public link is unavailable. Dedicated pages use the shared page pattern with static galleries rather than autoplay carousels. Gallery descriptions are project-specific.

## Local review

Review `/`, `/work`, `/work/leban-street`, `/work/pawen`, `/work/swiftlink`, `/work/openrolehq`, `/work/hris`, `/about`, and `/contact` at `http://localhost:3001`. All project actions now use completed routes; the legacy dialog fallback has been removed. See `release-review.md` for final cross-page checks. No deployment is included.

Browser verification uses the existing Playwright installation because the Browser plugin skill is not available in this session. Production analytics are preserved; the external tracker is intercepted during isolated UI checks. Email submission checks use mocked success and failure responses.
