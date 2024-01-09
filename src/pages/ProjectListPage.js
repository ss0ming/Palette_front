import styles from "./ProjectListPage.module.css";
import ProjectCategory from "../components/ProjectCategory.js";
import PopularUserBlank from "../components/PopularUserBlank.js";

function ProjectListPage() {
  return (
    <section>
      <div style={{ display: 'flex', flex: '1', flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <div><h1 className={styles.mainletter}>신규 프로젝트</h1>
          <ProjectCategory />
        </div>
        <div><h1 className={styles.mainletter}>관심 많은 프로젝트</h1>
          <ProjectCategory />
        </div>
      </div>
      <div><h1 className={styles.mainletter}>인기있는 사용자</h1>
        <PopularUserBlank />
      </div>
    </section>
  );
}

export default ProjectListPage;