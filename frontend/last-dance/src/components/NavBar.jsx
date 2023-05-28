import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContext";

export const NavBar = () => {
  const { isSignedIn, logout } = useContext(AuthenticationContext);

  return (
    <nav >
      <ul className="nav-links">
        {isSignedIn ? (
          <>
            <li>
              <Link to="/">Add Customer</Link>
            </li>
            <li>
              <Link to="/customer-list">Customer-List</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
      {isSignedIn && <button onClick={logout}>LOGOUT</button>}
    </nav>
  );
};
