import lostIslandHotel from './lost-island-hotel'
import cavelliAtelier from './cavelli-atelier'
import drinkRecipeFinder from './drink-recipe-finder'
import butterChicken from './butter-chicken'
import mingleTool from './mingle-tool'
import whatTheFluff from './current/what-the-fluff'


export const currentProjects = [
  whatTheFluff,
]

export const projects = [
  cavelliAtelier,
  mingleTool,
  lostIslandHotel,
  drinkRecipeFinder,
  butterChicken
]

export const allProjects = [...currentProjects, ...projects]