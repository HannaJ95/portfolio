import thumbnail from '../../../assets/images/projects/whatTheFluff/thumb.webp'
import thumbnailColorB from '../../../assets/images/projects/whatTheFluff/thumbColorB.webp'
import start from '../../../assets/images/projects/whatTheFluff/start.webp'
import game from '../../../assets/images/projects/whatTheFluff/game.webp'
import gameover from '../../../assets/images/projects/whatTheFluff/gameover.webp'
import scoreboard from '../../../assets/images/projects/whatTheFluff/scoreboard.webp'

export default {
  slug: 'what-the-fluff',
  title: 'What the Fluff',
  thumbnail,
  images: [thumbnailColorB, start, game, gameover, scoreboard],
  type: 'Web / Game',
  isGroupProject: true,
  shortDescription: 'A browser game where you catch as much falling cotton candy as you can without letting your tower hit the ceiling. Line up three of the same colour to clear them and keep the tower down, and watch out for the raindrops that melt it. It was built as part of a larger tivoli (amusement park) made by the whole class.',
  description: 'What the Fluff is a browser game built as part of a larger tivoli (amusement park) that the whole class made together, where each group built one game or attraction connected to a shared central API. You catch falling cotton candy in different colours and try to collect as many as you can. Line up three of the same colour and they clear away, which keeps your tower from growing too tall, and if it reaches the ceiling the game is over. Watch out for the raindrops too, since they melt your cotton candy. Each round takes a stake and pays out winnings and collectible stamps through the shared tivoli economy. The game is built with React and TypeScript, styled with Tailwind CSS, and it is mobile first with keyboard support following WCAG 2.1. You can play it as part of the tivoli at loopland.se, or on its own at the link below, since we built it to also run without the central bank.\n\nMy part was the backend and the integration. I built the backend as three Supabase edge functions (which run on Deno), set up the database in Supabase, and handled the data flow for what gets saved and when. I integrated the game with the central bank API for stakes, payouts and stamps, and I set up automatic type generation from both the central bank API specification and the database, which I used for the communication between the frontend and the edge functions. I also added a server side check that validates each score against the highest score that was actually possible in the time played, so scores cannot be faked.',
  date: '2026-05-27',
  techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Edge Functions', 'Deno'],
  liveUrl: 'https://what-the-fluff.vercel.app/',
  repoUrl: 'https://github.com/mariatedeman/what-the-fluff',
}
