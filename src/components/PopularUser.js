//eslint-disable-next-line
import { Link, NavLink } from "react-router-dom";
import styles from "./PopularUser.module.css";
import jsondata from "../api/mock.json"

function PopularUser() {
  const data = jsondata;
  const p = data.projects;
  
  return (
    p.map(project => (
      <Link to="/ProjectInformation">
        <div key={project.projectId}>
          <img
            className={styles.photo}
            alt="img"
            src={require(`../assets/망곰이.jpg`)}
          />
          <h1 className={styles.mainletter}>{project.publisher}</h1>
        </div>
      </Link>
    ))
  );
}

export default PopularUser;