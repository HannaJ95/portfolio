import thumbnail from '../../../assets/images/projects/mingle-tool/thumb.webp'
import imageMobilePages from '../../../assets/images/projects/mingle-tool/mobile-pages.webp'

export default {
  slug: 'mingle-tool',
  title: 'Mingle Tool',
  thumbnail,
  images: [imageMobilePages],
  type: 'Web',
  isGroupProject: true,
  collaborators: ['design students'],
  shortDescription: 'A real-time networking app for events where students and companies are automatically matched into groups to connect and exchange contact details.',
  description: 'Mingle Tool is a real-time web app built for networking events where students and companies are matched into groups of four. Participants scan a QR code (different for students and companies), fill in their contact details, and enter a waiting room. When three students and one company are ready, the server automatically matches them, assigns a shared animal card for identification, and provides three discussion questions. After the conversation, group members can view and copy each other\'s contact information and start a new round with their details pre-filled. Built with a React frontend communicating over both REST and WebSocket, a Node.js/Express backend handling real-time matching logic via Socket.io, and Supabase as the database. Deployed on Vercel and Railway. The visual design was created by two Digital Design students who were part of the team.',
  date: '2026-04-15',
  techStack: ['React', 'Vite', 'Tailwind', 'Zustand', 'Socket.io', 'React Router', 'Node.js', 'Express', 'Supabase'],
  liveUrl: '',
  repoUrl: 'https://github.com/HannaJ95/mingle-tool',
}
