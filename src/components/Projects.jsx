import { projects } from "../data/projects/index";
import ProjectCard from "./ProjectCard";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-14">
      <SectionTitle title="Projects" />

      <div className="flex flex-col px-4 sm:px-8 md:px-12 lg:px-24 gap-12 sm:grid sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="
              w-7/10
              sm:w-9/10
              md:w-8/10
              max-w-80
              sm:max-w-100

              odd:ml-auto
              sm:odd:ml-0

              sm:nth-[4n+1]:justify-self-end
              sm:nth-[4n+2]:justify-self-end
              
              sm:even:mt-60

              sm:[&:nth-child(odd):not(:first-child)]:-mt-62.5
              sm:[&:nth-child(even):not(:nth-child(2))]:-mt-10     
            "
          >
            <ProjectCard
              slug={project.slug}
              thumbnail={project.thumbnail}
              title={project.title}
              shortDescription={project.shortDescription}
              thumbnailClassName={project.thumbnailClassName}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
