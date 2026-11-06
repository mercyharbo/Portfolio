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
  screenshotCaption: string
}

export const openRoleStory: ProjectStory = {
  introduction: 'A focused workspace for discovering roles, preparing résumés, and moving through the job-search journey.',
  role: 'Frontend development',
  problemTitle: 'A clearer path through the search.',
  focusTitle: 'The work behind the interface.',
  deliveryTitle: 'A connected product experience.',
  scope: 'Onboarding, résumé tooling, AI-assisted workflows, and dashboard interfaces.',
  problem: 'Role discovery, résumé preparation, and application tracking can become disconnected tasks. The frontend needed to bring these workflows into one workspace, with a clear path from getting started to managing the next application.',
  focus: [
    {
      title: 'A guided way into the product',
      description: 'Built onboarding and dashboard flows around the candidate’s next task, connecting the entry experience with the workspace they would use to manage their search.',
    },
    {
      title: 'Dependable state and API-backed flows',
      description: 'Worked on reliable authentication state and the frontend workflows around role discovery, résumé tools, and the dashboard. React, Next.js, Zustand, and SWR formed part of the project’s frontend stack.',
    },
    {
      title: 'AI as part of the workflow',
      description: 'Implemented AI-assisted screens and résumé tooling with the surrounding user journey in mind, keeping the features supportive of the application process.',
    },
  ],
  delivered: [
    'Guided onboarding and a connected dashboard experience.',
    'Frontend screens for role discovery and résumé preparation.',
    'AI-assisted workflows integrated into the job-search experience.',
    'Application views that help candidates follow their progress.',
  ],
  screenshotCaption: 'OpenRoleHQ product interface preview.',
}
