import { useState } from "react";
import styles from "./RegisterProject.module.css";
import defaultProjectImg from "../assets/DefaultProjectImg.jpg";

function RegisterProject() {
  const [defaultProjectImgSrc, setDefaultProjectImgSrc] =
    useState(defaultProjectImg);

  return (
    <>
      <div className={styles.RegisterProjectHeader}>
        <header>
          <h1>프로젝트 등록하기</h1>
        </header>
      </div>
      <main className={styles.RegisterProjectMain}>
        <div className={styles.projectImg}>
          <h3>배경사진 선택</h3>
          <img alt="profileImg" src={defaultProjectImgSrc} />
          <input type="file"></input>
        </div>
        <div className={styles.projectName}>
          <h3>프로젝트명</h3>
        </div>
        <div className={styles.projectInfo}>
          <h3>프로젝트 소개 및 기간</h3>
        </div>
        <div className={styles.recruitmentDiv}>
          <h3>모집 직무</h3>
        </div>
        <div className={styles.language}>
          <h3>사용 기술 및 언어</h3>
        </div>
        <div className={styles.etc}>
          <h3>기타 참고사항</h3>
        </div>
      </main>
    </>
  );
}

export default RegisterProject;
