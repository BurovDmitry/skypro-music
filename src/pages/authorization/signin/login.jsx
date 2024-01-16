import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const SigninPage = ({ handleLogin }) => {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/register");
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const signIn = (event) => {
    event.preventDefault();
    handleLogin(password, email);
  };

  return (
    <body>
      <div class="container-enter">
        <div class="modal__block">
          <form class="modal__form-login" action="#">
            <a href="../">
              <div class="modal__logo">
                <img src="../img/logo_modal.png" alt="logo" />
              </div>
            </a>
            <input
              class="modal__input login"
              value={email}
              onChange={handleEmailChange}
              type="text"
              name="login"
              placeholder="Почта"
            />
            <input
              class="modal__input password"
              value={password}
              onChange={handlePasswordChange}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <button class="modal__btn-enter" onClick={signIn}>
              <span>Войти</span>
            </button>
            <button class="modal__btn-signup" onClick={handleSignUp}>
              <span>Зарегистрироваться</span>
            </button>
          </form>
        </div>
      </div>
    </body>
  );
};

export default SigninPage;
