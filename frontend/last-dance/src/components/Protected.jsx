import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContext";

const Protected = ({ children}) => {
  const { isSignedIn } = useContext(AuthenticationContext);

  if (isSignedIn === false) {
    return <Navigate to="/login" replace/>;
  }

  return children;
};

export default Protected;
