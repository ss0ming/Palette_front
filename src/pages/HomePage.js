import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <>
      <div className={styles.home}>
        <header className={styles.homeHeader}>
          <img alt="homeImg" src={require(`../assets/homeImg.PNG`)}></img>
        </header>
        <main className={styles.main}>
          <h3>현재 구인중인 프로젝트들</h3>
          <button>왼쪽 버튼</button>
        </main>
      </div>
    </>
  );
}

export default HomePage;
