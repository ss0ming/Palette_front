//eslint-disable-next-line
import { Link, NavLink } from "react-router-dom";
import styles from "./ProjectSummary.module.css";

function ProjectSummary() {
  return (
    <section>
        <div classname = "projectsummary">
            <img
                className={styles.photo}
                alt="img"
                src={require(`../assets/망곰이.jpg`)}
            />
            <h1 className={styles.mainletter}>프로젝트명</h1>
            <h1 className={styles.subletter}>프로젝트 소개글 요약...</h1>
        </div>
    </section>
  );
}

export default ProjectSummary;