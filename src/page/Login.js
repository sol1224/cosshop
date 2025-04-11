import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import api from "../utils/api";

const Login = ({ setAuthenticate, user, setUser }) => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  if (user) {
    navigate("/product");
  }

  const gotoLogin = () => {
    navigate("/login");
  };

  const loginUser = event => {
    event.preventDefault();
    setAuthenticate(true);
    loginWithUserId({ userId, password });
    navigate("/product");
  };

  const loginWithUserId = async ({ userId, password }) => {
    const response = await api.post("/auth/login", { userId, password });
    setUser(response.data.user);
  };

  return (
    <Container>
      <Form onSubmit={event => loginUser(event)}>
        <div className="login-page-title">
          {/* <div className="login-page-title-sub">
            <button className="cate" onClick={() => gotoLogin()}>
              로그인
            </button>
          </div>
          <div className="login-page-title-sub">
            <a href="/#">회원가입</a>
          </div> */}
        </div>
        <section className="login-form">
          <div className="login-label top-pd" type="userId">
            아이디 또는 이메일
          </div>
          <div className="bottom-pd">
            <input
              className="login-input"
              onChange={event => setUserId(event.target.value)}
            />
          </div>

          <div className="login-label" type="password">
            비밀번호
          </div>
          <div>
            <input
              className="login-input"
              onChange={event => setPassword(event.target.value)}
            />
          </div>
          <button className="login-button" type="submit">
            로그인
          </button>

          <section className="find-me">
            <div>
              <u className="find-me-li">아이디찾기</u>
            </div>
            <div>
              <u>비밀번호찾기</u>
            </div>
          </section>

          <section className="login-page-etc">
            <div>
              COS 온라인 스토어는 더현대닷컴이 운영·제공하는 사이트로 기존
              회원은 더현대닷컴 아이디와 비밀번호로 바로 이용 가능합니다.
            </div>
          </section>
        </section>
      </Form>
    </Container>
  );
};

export default Login;
