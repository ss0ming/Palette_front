//eslint-disable-next-line
import { Link, NavLink } from "react-router-dom";
import styles from "./ProjectSummary.module.css";
import jsondata from "../api/mock.json";

function ProjectSummary() {
  const data = jsondata;
  const p = data.projects;

  return p.map((project) => (
    <Link to={`/ProjectInformation/${project.slug}`} key={project.projectId}>
      <div className={styles.projectDiv}>
        <img
          className={styles.photo}
          alt="img"
          src={require(`../assets/${project.image}`)}
        />
        <h1 className={styles.mainletter}>{project.title}</h1>
        <h1 className={styles.subletter}>{project.introduction}</h1>
      </div>
    </Link>
  ));
}

export default ProjectSummary;
