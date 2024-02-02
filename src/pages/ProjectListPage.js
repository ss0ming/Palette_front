import styles from "./ProjectListPage.module.css";
import PopularUser from "../components/PopularUser.js";
import Search from "../components/Search.js";
import ProjectSummary from "../components/ProjectSummary.js";

function ProjectListPage() {
  return (
    <body>
      <div style={{ display: "flex" }}>
        <div>
          <h1 className={styles.mainletter}>신규 프로젝트</h1>
          <div style={{ width: 650, display: `flex` }}>
            <ProjectSummary />
          </div>
        </div>
        <div>
          <h1 className={styles.mainletter}>관심 많은 프로젝트</h1>
          <div style={{ width: 650, display: `flex` }}>
            <ProjectSummary />
          </div>
        </div>
      </div>

      <div>
        <h1 className={styles.mainletter}>인기있는 사용자</h1>
        <div style={{ display: "flex" }}>
          <PopularUser />
        </div>
      </div>

      <div>
        <h1 className={styles.mainletter}>검색</h1>
        <Search />
      </div>
    </body>
  );
}

export default ProjectListPage;
