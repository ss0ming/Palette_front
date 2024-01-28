import { useState } from "react";
import axios from "../lib/axios";
import styles from "./LoginPage.module.css";
import { useNavigate } from "react-router-dom";
import HorizonLine from "../components/HorizontalLine";

function LoginPage() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { email, password } = values;
    await axios.post("/auth/login", { email, password });
    navigate("/MyPage");
  }

  const handleKakaoLoginClick = () => {
    window.location.href = "http://localhost:8080/oauth/kakao"; //페이지 리다이렉트
  };

  return (
    <>
      <div className={styles.loginPage}>
        <h1 className={styles.header}>로그인</h1>
        <section className={styles.formLogin}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">ID</label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
            />
            <label htmlFor="password">PASSWORD</label>
            <input
              id="password"
              name="password"
              type="password"
              value={values.password}
              onChange={handleChange}
            />
            <button type="submit">로그인</button>
          </form>
        </section>
        <section className={styles.simpleLogin}>
          <HorizonLine text="간편 로그인" />
          <img
            alt="loginImg"
            src={require(`../assets/kakaoLoginButton.png`)}
            onClick={handleKakaoLoginClick}
          />
          <img alt="loginImg" src={require(`../assets/naverLoginButton.png`)} />
        </section>
      </div>
    </>
  );
}

export default LoginPage;
