import styles from "./ProjectListPage.module.css";
import ProjectCategory from "../components/ProjectCategory.js";
import PopularUser from "../components/PopularUser.js";
import Search from "../components/Search.js";
import Project from "../components/Project.js";

function ProjectListPage() {
  return (
    <section>
      <div style={{ display: 'flex', flex: '1', flexDirection: 'row' }}>
        <div style={{width: 650}}><h1 className={styles.mainletter}>신규 프로젝트</h1>
          <ProjectCategory />
        </div>
        <div><h1 className={styles.mainletter}>관심 많은 프로젝트</h1>
          <ProjectCategory />
        </div>
      </div>

      <div style={{ display: 'flex', flex: '1', flexDirection: 'row' }}>
        <div><h1 className={styles.mainletter}>인기있는 사용자</h1>
          <PopularUser />
        </div>
      </div>
      
      <div><h1 className={styles.mainletter}>검색</h1>
        <Search />
      </div>
      <div style={{ display: 'flex', flex: '1', flexDirection: 'row' }}>
        <Project />
      </div>
    </section>
  );
}

export default ProjectListPage;