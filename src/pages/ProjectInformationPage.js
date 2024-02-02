import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./ProjectInformationPage.module.css";
import heartBeforeImg from "../assets/heartBefore.png";
import heartAfterImg from "../assets/heartAfter.png";
import { getProjectBySlug, getProjects } from "../api";

function ProjectInformation() {
  const { projectSlug } = useParams();
  const project = getProjectBySlug(projectSlug);

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
          <p>{project.recruitStatus}</p>
        </div>
        <header className={styles.projectInfoHeader}>
          <img alt="projectImg" src={require(`../assets/${project.image}`)} />
          <div className={styles.headerInfo}>
            <div className={styles.headerInfoTitle}>
              <h1>{project.title}</h1>
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
              <p className={styles.period}>기간 : {project.period}</p>
              <p>{project.introduction}</p>
            </div>
          </div>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>현재 모집 현황</h3>
            <hr />
            <div className={styles.contents}>
              <div className={styles.recruitmentDiv}>
                <p>{project.recruitment}</p>
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
            <div className={styles.contents}>{project.Reference}</div>
          </div>
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>댓글</h3>
            <hr />
            <div className={styles.contents}>
              <p>{project.comment}</p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default ProjectInformation;