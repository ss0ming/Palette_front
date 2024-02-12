import styles from "./HomePage.module.css";
import ProjectSummaryHome from "../components/ProjectSummaryHome.js";

function HomePage() {

  
  return (
    <>
      <div className={styles.home}>
        <header className={styles.homeHeader}>
          <button>왼쪽 버튼</button>
          <img alt="homeImg" src={require(`../assets/paletteLogo.png`)} />
          <button>오른쪽 버튼</button>
        </header>
        <main className={styles.main}>
          <h3>현재 구인중인 프로젝트들</h3>
          <div style={{ display: "flex" }}>
            <ProjectSummaryHome />
          </div>
        </main>
      </div>
    </>
  );
}

export default HomePage;