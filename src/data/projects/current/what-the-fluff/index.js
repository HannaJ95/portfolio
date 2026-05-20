import thumbnail from '../../../../assets/images/projects/whatTheFluff/thumb.webp'

export default {
  slug: 'what-the-fluff',
  title: 'What the Fluff',
  thumbnail,
  type: 'Web / Game',
  isGroupProject: true,
  shortDescription: 'A browser-based mini game where you catch falling cotton candy on a platform controlled by mouse, keyboard or touch. Part of a larger collaborative tivoli built by the entire class.',
  description: 'What the Fluff is a small browser game built as part of a larger class-wide "tivoli" (amusement park) project, where each group contributes one game or attraction connected to a shared central API. Players catch falling cotton candy on a moving platform — controllable via mouse, keyboard or touch — and earn money and collectible stamps that integrate with the central tivoli economy. The project is built with React in TypeScript, with strict type safety across components, props, API responses and async error handling. Tailwind CSS handles styling and the game is designed mobile-first with full keyboard accessibility per WCAG 2.1.\n\nMy role: backend and integration. I am building the Supabase database, writing edge functions, designing how game state and transactions are stored, and handling the integration against the central tivoli API. I am also working on the overall data flow — what gets persisted, when, and how the game communicates with the central economy.',
  date: '2026-05-27',
  techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase'],
  liveUrl: '',
  repoUrl: 'https://github.com/mariatedeman/what-the-fluff',
}
