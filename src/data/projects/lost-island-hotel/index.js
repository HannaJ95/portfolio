import thumbnail from '../../../assets/images/projects/lostIslandHotel/thumb.webp'
import imageHotel from '../../../assets/images/projects/lostIslandHotel/hotel.webp'
import imageAdmin from '../../../assets/images/projects/lostIslandHotel/admin.webp'

export default {
  slug: 'lost-island-hotel',
  title: 'Lost Island Hotel',
  thumbnail,
  images: [imageHotel, imageAdmin],
  type: 'Web',
  shortDescription: 'A hotel booking system for a fictional island inspired by the TV series LOST. Built with PHP and SQLite, integrating with an external payment API.',
  description: 'A fullstack hotel booking system for the fictional Yrgopelag island, built at the end of the first semester. Visitors can book one of three room types — budget, standard, or luxury — for dates in January 2026. Pricing is calculated in real time with support for returning guest discounts and package deals. Payments are processed via the Central Bank of Yrgopelag\'s REST API using transfer code validation. A login-protected admin panel lets the hotel manager update prices, discounts, features, and view all bookings.',
  date: '2026-01-09',
  techStack: ['PHP', 'SQLite', 'JavaScript', 'HTML', 'CSS', 'Guzzle', 'phpdotenv'],
  liveUrl: 'https://hannajohansson01.se/LOST-ISLAND-HOTEL/',
  repoUrl: 'https://github.com/HannaJ95/yrgopelag',
}
