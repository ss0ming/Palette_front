//eslint-disable-next-line
import { Link, NavLink } from "react-router-dom";
import styles from "./PopularUserBlank.module.css";
import PopularUser from "./PopularUser.js";

function PopularUserBlank() {
  return (
    <div className={styles.PopularUserBlank}>
      <PopularUser />
    </div>
  );
}

export default PopularUserBlank;