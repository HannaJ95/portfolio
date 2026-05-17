import thumbnail from '../../../assets/images/projects/drinkRecipeFinder/thumb.webp'
import imageDesktop from '../../../assets/images/projects/drinkRecipeFinder/desktop.webp'
import imageMobile from '../../../assets/images/projects/drinkRecipeFinder/mobile.webp'

export default {
  slug: 'drink-recipe-finder',
  title: 'Drink Recipe Finder',
  thumbnail,
  images: [imageDesktop, imageMobile],
  type: 'Web',
  shortDescription: 'A responsive app that fetches random cocktail recipes from TheCocktailDB API, with filtering by alcohol type and ingredient measurements converted to cl.',
  description: 'A responsive web app built with vanilla JavaScript that fetches cocktail recipes from the public TheCocktailDB API. Users pick an alcohol type from a dropdown and get a random matching recipe with ingredients and measurements automatically converted to cl. The project was an exercise in working with external APIs, async/await, and DOM manipulation — without any frameworks or libraries.',
  date: '2025-12-11',
  techStack: ['JavaScript', 'CSS', 'HTML'],
  apis: ['TheCocktailDB API'],
  liveUrl: 'https://drink-recipe-finder.hannajohansson01.se/',
  repoUrl: 'https://github.com/HannaJ95/Drink-Recipe-Finder',
}
