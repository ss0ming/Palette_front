import { Link } from "react-router-dom";
import styles from "./ProjectItem.module.css";

function ProjectItem({ project }) {
  return (
    <>
      <div className={styles.projectItem}>
        <h2>
          <Link to={`/projectInformation/${project.slug}`}>
            {project.title}
          </Link>
        </h2>
      </div>
    </>
  );
}

export default ProjectItem;
