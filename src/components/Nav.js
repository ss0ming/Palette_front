//eslint-disable-next-line
import { Link, NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav() {
  return (
    <div className={styles.navbar}>
      <ul>
        <li>
          <img
            className={styles.Logo}
            alt="Logo"
            src={require(`../assets/paletteLogo.png`)}
          />
        </li>
        <li>
          <Link to="/">Palette</Link>
        </li>
        <li className={styles.navProject}>
          <Link to="/ProjectList">프로젝트</Link>
        </li>
        <li>
          <Link to="/ProjectInformation">내가 만들어야 하는 페이지</Link>
        </li>
        <li>
          <Link to="/MyPage">내 정보</Link>
        </li>
        <li>
          <Link to="/LoginPage">로그인</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
