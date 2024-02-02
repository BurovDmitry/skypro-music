import { useEffect } from "react";

function LogoutRoute({ handleLogout }) {
  useEffect(() => {
    handleLogout();
  }, [handleLogout]);

  return null;
}

export default LogoutRoute;


