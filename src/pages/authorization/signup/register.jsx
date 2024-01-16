import React, { useState } from "react";
import * as S from "./register.styles";

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
      <S.ContainerSignup>
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
              type="email"
              name="login"
              placeholder="Почта"
            />
            <S.ModalInput
              value={password1}
              onChange={handlePassword1Change}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <S.ModalInput
              value={password2}
              onChange={handlePassword2Change}
              type="password"
              name="password"
              placeholder="Повторите пароль"
            />
            <S.ModalBtnSignupEnt onClick={signUp}>
              <S.ModalBtnSignupEntText>
                Зарегистрироваться
              </S.ModalBtnSignupEntText>
            </S.ModalBtnSignupEnt>
          </S.ModalFormLogin>
        </S.ModalBlock>
      </S.ContainerSignup>
    </body>
  );
};

export default SignupPage;
