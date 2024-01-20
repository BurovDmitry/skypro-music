import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./login.styles.";

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
      <S.ContainerEnter>
        <S.ModalBlock>
          <S.ModalFormLogin>
            <a href="../">
              <S.ModalLogo>
                <S.Img src="../img/logo_modal.png" alt="logo" />
              </S.ModalLogo>
            </a>
            <S.ModalInput
              value={email}
              onChange={handleEmailChange}
              type="text"
              name="login"
              placeholder="Почта"
            />
            <S.ModalInput
              value={password}
              onChange={handlePasswordChange}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalBtnEnter onClick={signIn}>
              <S.ModalBtnEnterText>Войти</S.ModalBtnEnterText>
            </S.ModalBtnEnter>
            <S.ModalBtnSignup onClick={handleSignUp}>
              <S.ModalBtnSignupText>Зарегистрироваться</S.ModalBtnSignupText>
            </S.ModalBtnSignup>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerEnter>
    </body>
  );
};

export default SigninPage;
