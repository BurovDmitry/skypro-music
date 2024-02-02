import { useEffect } from "react";

function LogoutRoute({ handleLogout }) {
  useEffect(() => {
    console.log("handleLogout");
    handleLogout();
  }, [handleLogout]);

  return null;
}

export default LogoutRoute;


