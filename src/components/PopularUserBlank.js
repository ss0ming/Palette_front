//eslint-disable-next-line
import { Link, NavLink } from "react-router-dom";
import styles from "./PopularUserBlank.module.css";
import PopularUser from "./PopularUser.js";

function PopularUserBlank() {
  return (
    <section>
        <div className = {styles.PopularUserBlank}>
          <PopularUser/>
          <PopularUser/>
          <PopularUser/>
          <PopularUser/>
          <PopularUser/>
        </div>
    </section>
  );
}

export default PopularUserBlank;