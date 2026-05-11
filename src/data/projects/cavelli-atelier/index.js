import thumbnail from '../../../assets/images/projects/cavelliAtelier/thumb.webp'
import addNewProduct from '../../../assets/images/projects/cavelliAtelier/add_new_product.webp'
import allProducts from '../../../assets/images/projects/cavelliAtelier/all_products.webp'
import editProduct from '../../../assets/images/projects/cavelliAtelier/edit_product.webp'
import editProducts from '../../../assets/images/projects/cavelliAtelier/edit_products.webp'
import schema from '../../../assets/images/projects/cavelliAtelier/schema.webp'

export default {
  slug: 'cavelli-atelier',
  title: 'Cavelli Atelier',
  thumbnail,
  images: [allProducts, addNewProduct, editProduct, editProducts, schema],
  type: 'Web',
  isGroupProject: true,
  collaborators: ['Nathalie'],
  shortDescription: 'A login-protected admin tool for managing a fictional furniture brand\'s product catalogue. Built with Laravel  and Tailwind CSS.',
  description: 'Cavelli Atelier is a web-based admin tool for a fictional high-end furniture brand, built as a school project together with Nathalie. Staff can manage the full product catalogue — adding, editing, filtering by type, material and price, and deleting items. The app features full CRUD, pagination, toast notifications, color and material attribute pages, and an accessible UI meeting WCAG AA standards. The layout is responsive and keyboard navigable.',
  date: '2026-03-13',
  techStack: ['PHP', 'Laravel', 'Blade', 'Tailwind', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
  liveUrl: "",
  repoUrl: 'https://github.com/HannaJ95/Cavelli-Atelier',
}
