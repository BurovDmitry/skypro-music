import { Routes, Route } from "react-router-dom";
import { MyPlaylist } from "./pages/my-playlist/my-playlist.jsx";
import SigninPage from "./pages/authorization/signin/login.jsx";
import TrackListPage from "./components/track-list-page/track-list-page.jsx";
import { ProtectedRoute } from "./components/protected-route/protected-route.jsx";
import LogoutRoute from "./components/logout/logout.jsx";
import Category from "./pages/category/category.jsx";
import { NotFound } from "./pages/not-found/not-found.jsx";
import SignupPage from "./pages/authorization/signup/register.jsx";

export const AppRoutes = ({
  user,
  handleLogin,
  handleLogout,
  handleSignUp,
}) => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<SigninPage handleLogin={handleLogin} />}
      />
      <Route
        path="/register"
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
