//eslint-disable-next-line
import { Link, NavLink } from "react-router-dom";
import styles from "./ProjectCategory.module.css";
import ProjectSummary from "./ProjectSummary.js";

function ProjectCategory() {
  return (
    <section>
        <div className = {styles.ProjectCategory}>
          <ProjectSummary/>
          <ProjectSummary/>
          <ProjectSummary/>
          <ProjectSummary/>
          <ProjectSummary/>
        </div>
    </section>
  );
}

export default ProjectCategory;
