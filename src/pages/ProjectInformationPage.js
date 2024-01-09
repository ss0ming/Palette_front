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
        <div className={styles.section}></div>
      </div>
    </>
  );
}

export default ProjectInformation;