import thumbnail from '../../../assets/images/projects/butterChicken/thumb.webp'

export default {
  slug: 'butter-chicken',
  title: 'Butter Chicken',
  thumbnail,
  thumbnailClassName: 'invert grayscale',
  images: [],
  type: 'CLI',
  isGroupProject: true,
  collaborators: ['Malinsson'],
  shortDescription: 'A CLI travel recommendation engine that ranks destinations by exchange rates and weather.',
  description: 'Butter Chicken is a Node.js CLI app that helps you find affordable travel destinations based on your home currency and preferred weather. It combines live exchange rates, a static cost index dataset, and real-time 7-day temperature forecasts to score and rank countries. The scoring is weighted — 65% cost (exchange rate × cost index) and 35% weather fit — and results are displayed as a ranked list with scores out of 10. Built with inquirer for interactive prompts, chalk and figlet for styled terminal output, and ora for loading spinners.',
  date: '2026-02-13',
  techStack: ['Node.js', 'Inquirer', 'Chalk', 'Figlet', 'Ora'],
  apis: ['RestCountries', 'Open-Meteo', 'fawazahmed0/currency-api'],
  liveUrl: '',
  repoUrl: 'https://github.com/Malinsson/butter-chicken',
}