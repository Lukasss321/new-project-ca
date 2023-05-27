import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContext";

const Protected = () => {
  const { isSignedIn } = useContext(AuthenticationContext);

  if (!isSignedIn) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default Protected;
