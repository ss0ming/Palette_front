//eslint-disable-next-line
import { Link, NavLink } from "react-router-dom";
import styles from "./Project.module.css"
import jsondata from "../api/mock.json"

function Project() {
  const data = jsondata;
  const p = data.projects;

  return (
    p.map(project => (
      <Link to="/ProjectInformation">
        <div key={project.projectId} style={{ width: '100%', height: '100%', position: 'relative' }}>
          <div style={{ width: 680, height: 150, left: 0, top: 0, position: 'relative', background: 'white', borderRadius: 20, border: '0.20px rgba(0, 0, 0, 0.50) solid' }} />
          <div style={{ width: 100, height: 100, left: 25, top: 12, position: 'absolute' }}>
            <img
              className={styles.photo}
              alt="img"
              src={require(`../assets/망곰이.jpg`)}
            />
          </div>
          <div style={{ width: 470, height: 25, left: 150, top: 11, position: 'absolute', color: 'black', fontSize: 20, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>{project.title}</div>
          <div style={{ width: 470, height: 69, left: 150, top: 43, position: 'absolute', color: 'rgba(0, 0, 0, 0.50)', fontSize: 15, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>{project.introduction}</div>
          <div style={{ width: 20, height: 20, left: 25, top: 124, position: 'absolute', background: '#CCCCCC' }}></div>
          <div style={{ width: 20, height: 20, left: 86, top: 124, position: 'absolute' }}>
            <div style={{ width: 20, height: 20, left: 0, top: 0, position: 'absolute' }}>
              <div style={{ width: 20, height: 20, left: 0, top: 0, position: 'absolute' }}></div>
              <div style={{ width: 18, height: 13, left: 0, top: 0, position: 'absolute', background: '#CCCCCC' }}></div>
            </div>
          </div>
          <div style={{ width: 180, height: 20, left: 150, top: 123, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>작성자 : {project.publisher}</div>
          <div style={{ width: 250, height: 20, left: 430, top: 123, position: 'absolute', color: 'black', fontSize: 16, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>최근 업데이트 날짜 : {project.date}</div>
        </div>
      </Link >
    ))
  );
}

export default Project;