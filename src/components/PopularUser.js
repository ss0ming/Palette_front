//eslint-disable-next-line
import { Link, NavLink } from "react-router-dom";
import styles from "./PopularUser.module.css";

function PopularUser() {
  return (
    <section>
        <div>
            <img
                className={styles.photo}
                alt="img"
                src={require(`../assets/망곰이.jpg`)}
            />
            <h1 className={styles.mainletter}>사용자 이름</h1>
        </div>
    </section>
  );
}

export default PopularUser;