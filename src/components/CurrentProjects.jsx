import { Link } from "react-router-dom";
import { currentProjects } from "../data/projects/index";
import SectionTitle from "./SectionTitle";

export default function CurrentProjects() {
  if (currentProjects.length === 0) return null;

  return (
    <section id="current" className="scroll-mt-14 pb-24">
      <SectionTitle title="In Progress" />

      <div className="flex flex-col gap-16 px-4 sm:px-8 md:px-12 lg:px-24">
        {currentProjects.map((project) => {
          const formattedDate = new Date(project.date).toLocaleDateString("en-GB", {
            year: "numeric",
            month: "long",
          });

          return (
            <article
              key={project.slug}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start border-2 border-black p-6 md:p-10"
            >
              <div className="relative">
                <span
                  className="absolute top-3 left-3 z-10 flex items-center gap-2 bg-white border border-black px-2 py-1 text-xs font-bold uppercase tracking-widest"
                  aria-label="Currently in progress"
                >
                  <span className="size-2 rounded-full bg-black animate-pulse" />
                  In progress
                </span>
                <Link to={`/projects/${project.slug}`} className="block overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className={`max-w-md w-full mx-auto aspect-square object-cover transition-transform duration-400 hover:scale-105 ${project.thumbnailClassName ?? ""}`}
                  />
                </Link>
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-poppins leading-tight">
                    {project.title}
                  </h2>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-xs uppercase tracking-widest opacity-60">
                    <span>Due {formattedDate}</span>
                    <span>{project.type}</span>
                    <span>{project.isGroupProject ? "Group project" : "Solo project"}</span>
                  </div>
                </div>

                <p className="leading-relaxed text-justify whitespace-pre-line">{project.description}</p>

                <div>
                  <h3 className="text-xs uppercase tracking-widest font-bold opacity-60 mb-2">
                    Tech Stack
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <li
                        key={tech}
                        className="bg-black text-white text-sm font-bold px-2 py-1 uppercase"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>

                {project.apis?.length > 0 && (
                  <div>
                    <h3 className="text-xs uppercase tracking-widest font-bold opacity-60 mb-2">
                      API<span className="lowercase">s</span>
                    </h3>
                    <ul className="flex flex-wrap gap-2">
                      {project.apis.map((api) => (
                        <li
                          key={api}
                          className="border-2 border-black text-sm font-bold px-2 py-1 uppercase"
                        >
                          {api}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {(project.repoUrl || project.liveUrl) && (
                  <div className="flex gap-4 flex-wrap">
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold uppercase tracking-widest text-sm border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300"
                      >
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold uppercase tracking-widest text-sm border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors duration-300"
                      >
                        Live
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
