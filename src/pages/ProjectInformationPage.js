import styles from "./ProjectInformationPage.module.css";

function ProjectInformation() {
  return (
    <>
      <div className={styles.header}>
        <img alt="projectImg" src={require(`../assets/project_img.jpg`)} />
        <div className={styles.headerInfo}>
          <h1>프로젝트명</h1>
          <p>사용자 정보</p>
        </div>
      </div>
      <div className={styles.main}>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>프로젝트 소개 및 기간</h3>
          <hr />
          <div className={styles.content}>
            <p>기간 : 2023.12 ~ 2024. 06</p>
            <p>이 프로젝트는 ~ 어쩌구저쩌구</p>
          </div>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>현재 모집 현황</h3>
          <hr />
          <div className={styles.content}>
            <p>웹 프론트엔드 0/1</p>
          </div>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>기술</h3>
          <hr />
          <div className={styles.content}>
            <p>기술 이미지</p>
          </div>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>참고 링크</h3>
          <hr />
          <div className={styles.content}>
            <p>
              https://www.notion.so/f7147a5a76cd4c698ef6bb84c68dbcd0?v=7fbb4ce09edf489291de3fdf2b70ca24
            </p>
          </div>
        </div>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>댓글</h3>
          <hr />
          <div className={styles.content}>
            <p>어쩌구저쩌구 댓글~</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectInformation;
