import { Link } from 'react-router-dom'

export default function ProjectCard({ slug, thumbnail, title, shortDescription, thumbnailClassName }) {
  return (
    <Link
      to={`/projects/${slug}`}
      className="group flex flex-col max-w-xl pb-4 overflow-hidden"
    >
      <img src={thumbnail} alt={title} className={`aspect-9/10 object-cover duration-400 group-hover:scale-105 ${thumbnailClassName ?? ''}`} />

      <h2 className="pt-2 font-bold text-lg tracking-wider">{title}</h2>
      <p className="text-base line-clamp-3 text-justify">{shortDescription}</p>
    </Link>
  )
}
