import React from "react";
import { useEffect, useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, fas } from "@fortawesome/free-solid-svg-icons";
import { AppRoutes } from "./routes.jsx";
import * as S from "./App.styles.js";
import TrackListPage from "./components/track-list-page/TrackListPage.jsx";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  library.add(fas, faBars);
  const [showSkeleton, setShowSkeleton] = useState(true);
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
      password: password1,
    };
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    navigate("/");
  };

  const handleLogin = (password, email) => {
    const user = registeredUsers.find(
      (u) => u.email === email || u.password === password
    );
    if (!user) {
      alert("Почта/пароль не верны!");
      return;
    }
    localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.clear("user");
    setUser(null);
    navigate("/signin");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSkeleton(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <S.Wrapper>
        <S.Container>
          <AppRoutes
            showSkeleton={showSkeleton}
            user={user}
            handleLogin={handleLogin}
            handleLogout={handleLogout}
            handleSignUp={handleSignUp}
          />
        </S.Container>
      </S.Wrapper>
    </div>
  );
}

export default App;
