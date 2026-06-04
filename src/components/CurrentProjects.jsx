import { currentProjects } from "../data/projects/index";
import FeaturedProjects from "./FeaturedProjects";

export default function CurrentProjects() {
  return (
    <FeaturedProjects
      projects={currentProjects}
      id="current"
      title="In Progress"
      badgeText="In progress"
      badgePulse
      badgeAriaLabel="Currently in progress"
      dateLabel="Due"
    />
  );
}
