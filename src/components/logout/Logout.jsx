import { useEffect } from "react";

function LogoutRoute({ handleLogout }) {
  useEffect(() => {
    console.log("RENDER");
    handleLogout();
  }, [handleLogout]);

  return null;
}

export default LogoutRoute;

// изменения
