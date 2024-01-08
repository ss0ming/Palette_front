import { useState } from "react";
import styles from "./ProjectInformationPage.module.css";
import heartBeforeImg from "../assets/heartBefore.png";
import heartAfterImg from "../assets/heartAfter.png";

function ProjectInformation() {
  const [imageSrc, setImageSrc] = useState(heartBeforeImg);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    //하트 기능
    if (isClicked) {
      setImageSrc(heartBeforeImg);
      setIsClicked(false); //초기 상태로
    } else {
      setImageSrc(heartAfterImg);
      setIsClicked(true);
    }
  };

  return (
    <>
      <div className={styles.projectInformation}>
        <div className={styles.recru}>
          <p>모집중</p>
        </div>
        <header className={styles.projectInfoHeader}>
          <img alt="projectImg" src={require(`../assets/project_img.jpg`)} />
          <div className={styles.headerInfo}>
            <div className={styles.headerInfoTitle}>
              <h1>프로젝트명</h1>
              <img alt="heart" src={imageSrc} onClick={handleClick} />
            </div>
            <p>사용자 정보</p>
          </div>
        </header>
        <main className={styles.projectInfoMain}>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>프로젝트 소개 및 기간</h3>
            <hr />
            <div className={styles.contents}>
              <p className={styles.period}>기간 : 2023.12 ~ 2024. 06</p>
              <p>이 프로젝트는 ~ 어쩌구저쩌구</p>
            </div>
          </div>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>현재 모집 현황</h3>
            <hr />
            <div className={styles.contents}>
              <div className={styles.recruitmentDiv}>
                <p>웹 프론트엔드 0/1</p>
                <button>지원</button>
              </div>
              <div className={styles.recruitmentDiv}>
                <p>웹 서버 0/1</p>
                <button>지원</button>
              </div>
              <div className={styles.recruitmentDiv}>
                <p>UI/UX 디자인 0/1</p>
                <button>지원</button>
              </div>
            </div>
          </div>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>기술</h3>
            <hr />
            <div className={styles.contents}>
              <p>기술 이미지</p>
            </div>
          </div>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>참고 링크</h3>
            <hr />
            <div className={styles.contents}>
              <a href="https://www.notion.so/f7147a5a76cd4c698ef6bb84c68dbcd0?v=7fbb4ce09edf489291de3fdf2b70ca24">
                https://www.notion.so/f7147a5a76cd4c698ef6bb84c68dbcd0?v=7fbb4ce09edf489291de3fdf2b70ca24
              </a>
            </div>
          </div>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>댓글</h3>
            <hr />
            <div className={styles.contents}>
              <p>어쩌구저쩌구 댓글~</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default ProjectInformation;
