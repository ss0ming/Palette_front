import styles from "./ProjectListPage.module.css";
import ProjectCategory from "../components/ProjectCategory.js";

function ProjectListPage() {
  return (
    <section>
      <div className={styles.row}>
        <div><h1 className={styles.mainletter}>신규 프로젝트</h1>
        <ProjectCategory/>
        </div>
        <div><h1 className={styles.mainletter}>관심 많은 프로젝트</h1>
        <ProjectCategory/>
        </div>
      </div>
      <div><h1 className={styles.mainletter}>인기있는 사용자</h1>
      <ProjectCategory/>
      </div>
    </section>
  );
}

export default ProjectListPage;