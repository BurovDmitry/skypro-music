import { Routes, Route } from "react-router-dom";
import { MyPlaylist } from "./pages/my-playlist/MyPlaylist.jsx";
import { NotFound } from "./pages/not-found/NotFound.jsx";
import { Category } from "./pages/category/Сategory.jsx";
import SigninPage from "./pages/authorization/signin/Signin.jsx";
import TrackListPage from "./components/track-list-page/TrackListPage.jsx";
import { ProtectedRoute } from "./components/protected-route/ProtectedRoute.jsx";
import LogoutRoute from "./components/logout/Logout.jsx";
import SignupPage from "./pages/authorization/signup/Signup.jsx";

export const AppRoutes = ({
  user,
  handleLogin,
  handleLogout,
  handleSignUp,
}) => {
  return (
    <Routes>
      <Route
        path="/signin"
        element={<SigninPage handleLogin={handleLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUp={handleSignUp} />}
      />
      <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
        <Route path="/" element={<TrackListPage user={user} />} />

        <Route path="/category/:id" element={<Category />} />
        <Route path="/my-playlist" element={<MyPlaylist />} />
        <Route
          path="/signout"
          element={<LogoutRoute handleLogout={handleLogout} />}
        />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
