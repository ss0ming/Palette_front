import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./LoginPage.module.css";

function LoginPage(props) {
  const dispatch = useDispatch();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault(); //리프레시 방지

    let body = {
      id: id,
      password: password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        props.history.push("/");
      } else {
        alert("Error");
      }
    });
  };

  return (
    <>
      <div className={styles.loginPage}>
        <h1 className={styles.header}>로그인</h1>
        <section className={styles.formLogin}>
          <form onSubmit={onSubmitHandler} />
          <label>ID</label>
          <input type="id" value={id} onChange={onIdHandler} />
          <label>PASSWORD</label>
          <input
            type="password"
            value={password}
            onChange={onPasswordHandler}
          />
          <button>로그인</button>
        </section>
        <hr />
        <section className={styles.simpleLogin}>
          <p>간편 로그인</p>
          <img alt="loginImg" src={require(`../assets/loginImg_kakao.png`)} />
          <img alt="loginImg" src={require(`../assets/loginImg_naver.png`)} />
        </section>
      </div>
    </>
  );
}

export default LoginPage;
