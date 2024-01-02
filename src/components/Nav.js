import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/ProjectList">프로젝트</Link>
        </li>
        <li>
          <Link to="/ProjectInformation">내가 만들어야 하는 페이지</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
