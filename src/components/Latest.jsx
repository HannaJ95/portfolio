import { latestProjects } from "../data/projects/index";
import FeaturedProjects from "./FeaturedProjects";

export default function Latest() {
  return (
    <FeaturedProjects
      projects={latestProjects}
      id="latest"
      title="Latest"
      badgeText="Latest"
      badgeAriaLabel="Latest project"
      dateLabel="Completed"
    />
  );
}
