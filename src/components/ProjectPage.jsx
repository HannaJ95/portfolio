import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { allProjects } from '../data/projects/index'
import ImageCarousel from './ImageCarousel'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = allProjects.find((p) => p.slug === slug)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  if (!project) {
    return (
      <div className="p-8">
        <Link to="/#projects" className="text-sm font-bold uppercase tracking-widest hover:underline underline-offset-4">
          ← Projects
        </Link>
        <p className="mt-8">Project not found.</p>
      </div>
    )
  }

  const {
    title,
    description,
    images,
    techStack,
    apis,
    liveUrl,
    repoUrl,
    date,
    type,
    isGroupProject,
    thumbnail,
  } = project

  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
  })

  const isFallback = !images?.length

  return (
    <article className="min-w-xs pb-20">
      <Link
        to="/#projects"
        className="inline-block px-4 py-4 text-xs font-bold uppercase tracking-widest hover:underline underline-offset-4"
      >
        ← Projects
      </Link>

      <header className="bg-black text-white px-6 py-12">
        <h1 className="text-[clamp(2.5rem,7vw,7rem)] font-bold font-poppins leading-none">{title}</h1>
        <div className="flex flex-wrap gap-4 mt-4 text-xs uppercase tracking-widest opacity-60">
          <span>{formattedDate}</span>
          <span>{type}</span>
          <span>{isGroupProject ? 'Group project' : 'Solo project'}</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full px-4 lg:px-20">

        <div className="order-2 md:order-1">
          {isFallback ? (
            <div className="py-8">
              <img src={thumbnail} alt={title} className="w-full" />
            </div>
          ) : (
            <ImageCarousel images={images} title={title} />
          )}
        </div>

        <div className="flex flex-col gap-8 px-6 py-8 order-1 md:order-2">
          <p className="leading-relaxed whitespace-pre-line">{description}</p>

          <div>
            <h2 className="text-xs uppercase tracking-widest font-bold opacity-60 mb-3">Tech Stack</h2>
            <ul className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <li key={tech} className="bg-black text-white text-sm font-bold px-2 py-1 uppercase">
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          {apis?.length > 0 && (
            <div>
              <h2 className="text-xs uppercase tracking-widest font-bold opacity-60 mb-3">API<span className='lowercase'>s</span></h2>
              <ul className="flex flex-wrap gap-2">
                {apis.map((api) => (
                  <li key={api} className="border-2 border-black text-sm font-bold px-2 py-1 uppercase">
                    {api}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {(repoUrl || liveUrl) && (
            <div>
              <h2 className="text-xs uppercase tracking-widest font-bold opacity-60 mb-3">Links</h2>
            <div className="flex gap-4">
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold uppercase tracking-widest text-sm border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300"
                >
                  GitHub
                </a>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold uppercase tracking-widest text-sm border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300"
                >
                  Live
                </a>
              )}
            </div>
            </div>
          )}
        </div>

      </div>
    </article>
  )
}
