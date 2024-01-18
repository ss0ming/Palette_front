//eslint-disable-next-line
import { Link, NavLink } from "react-router-dom";
import styles from "./ProjectCategory.module.css";
import ProjectSummary from "./ProjectSummary.js";

function ProjectCategory() {
  return (
        <div style={{ display: 'flex', flex: '1', flexDirection: 'row', paddingLeft: '30px'}}>
          <ProjectSummary/>
        </div>
  );
}

export default ProjectCategory;
