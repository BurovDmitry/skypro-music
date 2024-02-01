import React, { useEffect } from "react";
import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, fas } from "@fortawesome/free-solid-svg-icons";
import { AppRoutes } from "./routes.jsx";
import * as S from "./app.styles.js";
import { useNavigate } from "react-router-dom";
import AudioPlayer from "./components/audio-player/audio-player.jsx";

function App() {
  const navigate = useNavigate();
  library.add(fas, faBars);
  const [track, setTrack] = useState(null);
  const [user, setUser] = useState(null);
  const registeredUsers = [
    {
      email: "123@gmail.com",
      password: "123",
    },
    {
      email: "321@gmail.com",
      password: "111",
    },
  ];

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
      navigate("/");
    }
  }, []);

  const handleSignUp = (password1, password2, email) => {
    if (password1 !== password2) {
      alert("Пароли не совпадают!");
      return;
    }
    if (password1.length < 3) {
      alert("Пароль слишком короткий!");
      return;
    }
    if (email.length < 6) {
      alert("Email слишком короткий!");
      return;
    }
    if (!/^([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)$/.test(email)) {
      alert("Email не корректный!");
      return;
    }

    const user = {
      email,
    };
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    navigate("/");
  };

  const handleLogin = (password, email) => {
    const user = registeredUsers.find(
      (u) => u.email === email && u.password === password
    );
    if (!user) {
      alert("Почта/пароль не верны!");
      return;
    }
    delete user.password;
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.clear("user");
    setUser(null);
    navigate("/login");
    setTrack(null);
  };

  const handleStartTrack = (track) => {
    setTrack(track);
  };

  return (
    <div className="App">
      <S.Wrapper>
        <S.Container>
          <AppRoutes
            user={user}
            handleStartTrack={handleStartTrack}
            handleLogin={handleLogin}
            handleLogout={handleLogout}
            handleSignUp={handleSignUp}
          />
          <AudioPlayer track={track} />
        </S.Container>
      </S.Wrapper>
    </div>
  );
}

export default App;
