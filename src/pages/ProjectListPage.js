import styles from "./ProjectListPage.module.css";
import PopularUser from "../components/PopularUser.js";
import Search from "../components/Search.js";
import ProjectSummary from "../components/ProjectSummary.js";

function ProjectListPage() {
  return (
    <body>
      <div className={styles.projectListPage}>
        <h1 className={styles.mainletter}>&#128187; 신규 프로젝트</h1>
        <div className={styles.newProject}>
          <ProjectSummary />
        </div>
        <h1 className={styles.mainletter}>&#128150; 관심 많은 프로젝트</h1>
        <div className={styles.likeProject}>
          <ProjectSummary />
        </div>
        <h1 className={styles.mainletter}>&#128587; 인기있는 사용자</h1>
        <div className={styles.likeUser}>
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
