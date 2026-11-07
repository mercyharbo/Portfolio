export interface ProjectStory {
  introduction: string
  role: string
  scope: string
  problem: string
  problemTitle: string
  focusTitle: string
  deliveryTitle: string
  focus: { title: string; description: string }[]
  delivered: string[]
  galleryDescription?: string
}

export const hrisStory: ProjectStory = {
  introduction: 'An HR platform frontend connecting employee self-service with onboarding, document review, leave approvals, offboarding, and workforce reporting for administrators.',
  role: 'Frontend development',
  scope: 'Employee and admin dashboards, onboarding, staff records, document workflows, leave, offboarding, and analytics.',
  problemTitle: 'Make the employee journey easier to manage.',
  focusTitle: 'Everyday HR, from both sides.',
  deliveryTitle: 'Connected employee and admin workflows.',
  problem: 'Employees need clear ways to maintain their information, submit documents, and request leave. HR teams need to review those requests, manage staff records, and understand workforce activity. I worked on frontend flows that connect these responsibilities across separate employee and administrator workspaces, with shared forms, data handling, and action feedback.',
  focus: [
    { title: 'Account access and role-aware workspaces', description: 'Implemented authentication and invitation-based onboarding interfaces, including verification, password setup, and recovery. Employee and administrator navigation lead to different dashboard workflows. A shared Axios layer handles API requests and queues concurrent requests during token refresh, while SWR manages API-backed views.' },
    { title: 'Employee onboarding and staff records', description: 'Built multi-step employee registration, profile editing, and administrator-managed staff records. Individual and bulk-entry workflows capture structured employee and job information, while public registration submissions can be reviewed and approved or rejected. React Hook Form and Zod support form state and validation.' },
    { title: 'Document upload and review', description: 'Connected employee and administrator interfaces to document upload and download APIs, including supporting and guarantor documents. Review dialogs, upload feedback, and employee-specific document views make these files accessible within the staff-record workflow.' },
    { title: 'Leave requests and approvals', description: 'Built employee views for leave balances, applications, pending requests, tracking, and history. Administrator interfaces separate pending, approved, and rejected requests and connect review dialogs to approval actions, keeping the request state visible on both sides of the workflow.' },
    { title: 'Resignation and offboarding', description: 'Implemented employee resignation requests, offboarding forms, document steps, and status history. Administrator views bring together exit requests, approval and rejection actions, pending clearance, and supporting documents so HR teams can follow each departure through its stages.' },
    { title: 'Workforce tables and reporting', description: 'Built structured workforce views with TanStack Table and API-backed Recharts visualizations. Reporting covers headcount and hiring trends, department distribution, tenure, active and inactive employees, leave patterns, and exit activity, with loading and empty states around the data.' },
  ],
  delivered: [
    'Separate employee and administrator experiences with shared API and session handling.',
    'Multi-step onboarding, editable staff records, and individual or bulk-entry workflows.',
    'Employee document uploads, downloads, and administrator review interfaces.',
    'Leave balances, applications, approval workflows, and request history.',
    'Resignation, clearance, and offboarding interfaces with supporting documents.',
    'Workforce tables and charts for employee, leave, and exit activity.',
  ],
}

export const openRoleStory: ProjectStory = {
  introduction: 'A candidate-facing frontend connecting onboarding, profile and résumé management, AI-assisted writing, application tracking, billing, and browser-extension setup.',
  role: 'Frontend development',
  problemTitle: 'Bring the application journey together.',
  focusTitle: 'From first sign-in to the next application.',
  deliveryTitle: 'A connected candidate workspace.',
  scope: 'Authentication, onboarding, candidate profiles, AI writing tools, application dashboards, billing, extension connection, and public application forms.',
  problem: 'A candidate needs more than an application list. Their profile, résumé, preferences, generated materials, subscription, and browser-extension setup all affect what they can do next. I built frontend flows that connect those parts of OpenRoleHQ while keeping account state, loading feedback, and next steps understandable.',
  focus: [
    {
      title: 'Authentication, onboarding, and candidate profiles',
      description: 'Implemented registration and email-verification screens, password recovery, Google sign-in callbacks, and account-state handling. Guided onboarding connects résumé upload, personal information, job preferences, extension setup, and plan selection; profile screens let candidates maintain their experience, projects, documents, and preferences.',
    },
    {
      title: 'Application dashboards and job views',
      description: 'Built dashboard and job-detail interfaces alongside application tracking with status tabs, search, date and match-score filters, pagination, and detail dialogs. SWR query hooks and Zustand stores connect API-backed data with the surrounding UI state.',
    },
    {
      title: 'AI-assisted writing and document management',
      description: 'Implemented interfaces for résumé, cover-letter, and personal-summary generation, connecting candidate input to backend generation APIs. Saved-generation views and résumé download controls carry the user from entering context to reviewing and accessing generated materials in the same workspace.',
    },
    {
      title: 'Browser-extension connection and product guidance',
      description: 'Built extension installation and connection steps, status checks, and dashboard controls around the candidate’s application workflow. Connection feedback helps users understand whether their workspace is ready, while Driver.js product tours explain the surrounding interface.',
    },
    {
      title: 'Billing, subscriptions, and credits',
      description: 'Integrated Dodo Payments checkout into plan and subscription flows, with billing balance, history, payment-method, and cancellation interfaces. Loading and action feedback keep these account operations connected to the candidate dashboard.',
    },
    {
      title: 'Public application forms and product content',
      description: 'Implemented public collection-submission interfaces with résumé uploads and analysis-status feedback. The wider frontend includes company and candidate landing experiences, Contentful-backed articles, metadata, and main/applicant domain routing. Shared navigation connects these experiences with the wider OpenRole ecosystem.',
    },
  ],
  delivered: [
    'Authentication, guided onboarding, and editable candidate profiles.',
    'API-backed dashboards, application filtering, and job-detail views.',
    'AI writing interfaces with saved materials and résumé downloads.',
    'Browser-extension setup, connection feedback, and guided product tours.',
    'Subscription, checkout, credit-balance, and billing-history interfaces.',
    'Public résumé-submission flows and Contentful-backed product content.',
  ],
}

export const swiftLinkStory: ProjectStory = {
  galleryDescription: 'A closer look at the customer experience across wallet access, service selection, and transaction history.',
  introduction: 'A self-initiated fintech product I built across the frontend and backend, connecting everyday bill payments, wallet funding, transaction settlement, and administrator operations.',
  role: 'Product ownership & full-stack engineering',
  scope: 'OTP onboarding, customer and admin dashboards, service purchases, wallet funding, provider integrations, reconciliation, and support.',
  problemTitle: 'A payment request is only the beginning.',
  focusTitle: 'From the interface to settlement.',
  deliveryTitle: 'An end-to-end product to learn from.',
  problem: 'A bill-payment product needs to connect what customers see with what payment and service providers actually confirm. Wallet transfers, pending purchases, delayed callbacks, and failed transactions all affect the experience. I built SwiftLink as a self-initiated product to deepen my fintech engineering skills across those workflows, from mobile purchase screens to backend settlement and operational tools.',
  focus: [
    { title: 'A connected frontend and backend', description: 'Built the Next.js frontend around a same-origin API layer connected to an Express backend. Shared validation contracts, PostgreSQL data, Prisma, SWR, and Zustand support the path from a customer action to its stored transaction state.' },
    { title: 'Customer onboarding and everyday payments', description: 'Implemented email OTP onboarding, profile completion, transaction PIN flows, and purchase journeys for airtime, mobile data, electricity, cable TV, and betting-wallet funding. Saved beneficiaries, spending insights, transaction history, and downloadable receipts support repeat use.' },
    { title: 'Wallet funding and transfer reconciliation', description: 'Integrated dedicated bank-account funding through Monnify, with verified callbacks and reconciliation for transfers. Database-backed wallet operations track credits and debits, using provider references and idempotent operations to handle repeated processing attempts.' },
    { title: 'Provider outcomes and transaction recovery', description: 'Connected service purchases to provider verification, pending states, reconciliation, refunds, and reversals. Callback processing and authenticated provider requery help resolve uncertain outcomes; electricity fulfillment also includes token recovery and receipt delivery.' },
    { title: 'Administrator operations and reporting', description: 'Built dashboards for revenue, tracked profit, service activity, customer status, and transaction review. Admin workflows include wallet adjustments, reconciliation, support replies, and broadcasts, while super admin tools manage administrator access and its audit history.' },
    { title: 'Support and an installable web experience', description: 'Implemented customer support conversations, in-app notifications, web push integration, and PDF or image receipt exports. Responsive layouts and PWA installation support let the same web product work across mobile customer flows and desktop operations.' },
  ],
  delivered: [
    'A Next.js customer experience connected to an Express backend and PostgreSQL.',
    'OTP onboarding, transaction PIN flows, bill purchases, and saved beneficiaries.',
    'Bank-transfer wallet funding with callback handling and reconciliation.',
    'Transaction status tracking, recovery workflows, and downloadable receipts.',
    'Admin reporting, user and wallet operations, and administrator management.',
    'Support conversations, notifications, spending insights, and an installable PWA.',
  ],
}

export const lebanStreetStory: ProjectStory = {
  introduction: 'An active restaurant ordering and operations platform I built, connecting the customer storefront with kitchen, sales, inventory, and super admin dashboards.',
  role: 'Frontend engineering',
  scope: 'Customer ordering and checkout, kitchen order queues, sales workflows, inventory management, and super admin reporting.',
  problemTitle: 'Connect the order to the operation.',
  focusTitle: 'Different roles. One restaurant workflow.',
  deliveryTitle: 'A storefront and the tools behind it.',
  galleryDescription: 'The live catalogue shows how customers browse food categories, compare menu items, and begin an order. The cover uses the earlier presentation mockup.',
  problem: 'The customer’s order is only the beginning of the restaurant workflow. Sales staff need to review it and hand it to the kitchen, kitchen teams need to manage preparation, inventory staff need to maintain stock, and administrators need to understand revenue and costs. I built frontend experiences for those different roles alongside the customer-facing ordering journey.',
  focus: [
    { title: 'Customer ordering and checkout', description: 'Built category-based menu discovery, cart management, and checkout across desktop and mobile. The address flow uses Google Places API to support location-aware delivery pricing, with Zustand for client-side state and SWR for API-backed data.' },
    { title: 'Kitchen dashboard and preparation queues', description: 'Implemented a batch-based order queue with pending, preparing, and ready states. Kitchen staff can inspect batch details, start preparation, mark batches ready, print receipts, and review order history.' },
    { title: 'Sales dashboard and order handoff', description: 'Built sales interfaces for product selection, online order batches, order details, and history. Staff can send batches to the kitchen, while the sales overview presents revenue trends and product-inventory analytics.' },
    { title: 'Inventory and raw-material management', description: 'Built interfaces for products, categories, stock adjustments, raw materials, suppliers, and wastage records. The inventory overview brings together stock information, inventory valuation, and category breakdowns; delivery-area management supports the ordering experience.' },
    { title: 'Super admin oversight and reporting', description: 'Implemented management dashboards for orders, revenue, costs, and profit analytics, with supporting reports and critical alerts. The admin area also includes staff management and team-performance views, with role-aware navigation for management workflows.' },
  ],
  delivered: [
    'A responsive storefront with menu discovery, cart management, delivery pricing, and checkout.',
    'Kitchen preparation queues, batch status updates, receipts, and history.',
    'Sales order handling, kitchen handoff, and revenue reporting.',
    'Product and raw-material inventory interfaces with stock and wastage management.',
    'Super admin dashboards for order visibility, revenue, cost, and profit analytics.',
    'An active restaurant platform that the business continues to use.',
  ],
}

export const pawenStory: ProjectStory = {
  introduction: 'A connected frontend for the PAWEN Summit, Exhibition, and Awards Gala, bringing event discovery, participation forms, managed content, and delegate support into one website.',
  role: 'Full frontend implementation',
  scope: 'Event pages, Contentful content integration, nomination and participation forms, travel information, and helpdesk integration.',
  problemTitle: 'One platform. Several ways to take part.',
  focusTitle: 'Content, participation, and support.',
  deliveryTitle: 'More than an event landing page.',
  galleryDescription: 'The homepage introduces the event platform, while the three-experience section gives visitors a clear route into the Summit, Exhibition, and Awards Gala.',
  problem: 'PAWEN serves visitors with different goals: attending the Summit, exhibiting a business, applying to speak, nominating someone for an award, or planning a visit. The frontend needed to give each audience a clear path while keeping shared event information, content, and interaction patterns consistent across the website.',
  focus: [
    { title: 'A connected event experience', description: 'Implemented responsive pages for the Summit, Exhibition, Awards Gala, nominations, speakers, sponsors, winners, and travel planning. Shared navigation and reusable sections connect those destinations without treating each event as a separate website.' },
    { title: 'Contentful-backed speakers and awards', description: 'Integrated Contentful content into the frontend for speaker profiles, award categories, and winners. The presentation handles content ordering, visibility, linked assets, and server-rendered views so published content can be managed separately from the page components.' },
    { title: 'Guided participation and nomination forms', description: 'Built multi-step nomination, Summit registration, exhibitor, and speaker-application flows. Zustand coordinates dialog state, Zod validates submissions, and server actions connect to Jotform. Field-level feedback, submission states, and supporting-file handling keep longer forms understandable.' },
    { title: 'Delegate guidance and helpdesk integration', description: 'Built travel and accommodation guidance alongside event ticket and partner links. Integrated Nviti’s chat widget with a dedicated helpdesk experience, connecting the support entry point to the existing third-party service rather than building a separate chat backend.' },
    { title: 'Motion and consent-aware measurement', description: 'Applied shared reveal patterns and smooth scrolling across the event pages. Integrated consent controls for Google Analytics and event tracking around participation forms and key links, keeping measurement separate from the visitor’s ability to use the website.' },
  ],
  delivered: [
    'A responsive website connecting three event experiences and their supporting pages.',
    'Contentful-backed speaker, award-category, and winner presentation.',
    'Nomination, registration, exhibitor, and speaker forms connected to Jotform.',
    'Travel planning, newsletter signup, and an integrated digital helpdesk.',
    'Reusable motion patterns, consent controls, and page-specific metadata.',
  ],
}
