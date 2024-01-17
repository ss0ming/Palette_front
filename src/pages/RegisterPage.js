import { useState } from "react";
import styles from "./RegisterPage.module.css";
//import { useNavigate } from "react-router-dom";
import axios from "../lib/axios";

function RegisterPage() {
  //초기 values 설정
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    passwordRepeat: "",
  });

  //const toast= useToaster();
  //const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefalut();

    if (values.password !== values.passwordRepeat) {
      console.log("비밀번호가 일치하지 않습니다");
      return;
    }
    const { name, email, password } = values;
    await axios.post("/users", { name, email, password });
    //await axios.post("/auth/login", { email, password });
  }

  return (
    <>
      <div className={styles.loginPage}>
        <h1 className={styles.header}>회원가입</h1>
        <section className={styles.formLogin}>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">이름</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="홍길동"
              value={values.name}
              onChange={handleChange}
            />
            <label htmlFor="email">email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="example@email.com"
              value={values.email}
              onChange={handleChange}
            />
            <label htmlFor="password">PASSWORD</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="비밀번호"
              value={values.password}
              onChange={handleChange}
            />
            <label htmlFor="passwordRepeat">PASSWORD check</label>
            <input
              id="passwordRepeat"
              name="passwordRepeat"
              type="password"
              placeholder="비밀번호 확인"
              value={values.passwordRepeat}
              onChange={handleChange}
            />
            <button>회원가입</button>
          </form>
        </section>
      </div>
    </>
  );
}

export default RegisterPage;
