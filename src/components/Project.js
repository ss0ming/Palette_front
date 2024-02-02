//eslint-disable-next-line
import { Link, NavLink } from "react-router-dom";
import styles from "./Project.module.css";
import jsondata from "../api/mock.json";

function Project() {
  const data = jsondata;
  const p = data.projects;

  return p.map((project) => (
    <Link to={`/projectInformation/${project.slug}`}>
      <div key={project.projectId}>
        <div />
        <div>
          <img
            className={styles.photo}
            alt="img"
            src={require(`../assets/${project.image}`)}
          />
        </div>
        <div>{project.title}</div>
        <div>{project.introduction}</div>
        <div></div>
        <div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div>작성자 : {project.publisher}</div>
        <div>최근 업데이트 날짜 : {project.date}</div>
      </div>
    </Link>
  ));
}

export default Project;
