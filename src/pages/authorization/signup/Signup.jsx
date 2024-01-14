import React, { useState } from "react";
import "./Signup.css";

const SignupPage = ({ handleSignUp }) => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword1Change = (event) => {
    setPassword1(event.target.value);
  };

  const handlePassword2Change = (event) => {
    setPassword2(event.target.value);
  };

  const signUp = (event) => {
    event.preventDefault();
    handleSignUp(password1, password2, email);
  };

  return (
    <body>
      <div className="container-signup">
        <div className="modal__block">
          <form className="modal__form-login">
            <a href="../">
              <div className="modal__logo">
                <img src="../img/logo_modal.png" alt="logo" />
              </div>
            </a>
            <input
              className="modal__input login"
              value={email}
              onChange={handleEmailChange}
              type="email"
              name="login"
              placeholder="Почта"
            />
            <input
              className="modal__input password-first"
              value={password1}
              onChange={handlePassword1Change}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <input
              className="modal__input password-double"
              value={password2}
              onChange={handlePassword2Change}
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <button className="modal__btn-signup-ent" onClick={signUp}>
              <span>Зарегистрироваться</span>
            </button>
          </form>
        </div>
      </div>
    </body>
  );
};

export default SignupPage;
