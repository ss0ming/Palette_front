import styles from "./MyPage.module.css";

function MyPage() {
  return (
    <>
      <div className={styles.MyPage}>
        <div className={styles.profile}>
          <img alt="profileImg" src={require(`../assets/profileImg.avif`)} />
          <div className={styles.profileInfo}>
            <section className={styles.section1}>
              <h2>닉네임</h2>
              <p className={styles.major}>전공자</p>
            </section>
            <section className={styles.section2}>
              <p className={styles.info}>안녕하세요 저는~</p>
            </section>
            <section className={styles.section3}>
              <h2>내 직무</h2>
              <p>웹 프론트엔드</p>
            </section>
            <section className={styles.section4}>
              <h2>내 기술스택</h2>
            </section>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default MyPage;
