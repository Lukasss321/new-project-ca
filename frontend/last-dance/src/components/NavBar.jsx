import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContext";

export const NavBar = ({ isLoading, onLogout }) => {
  const { isSignedIn } = useContext(AuthenticationContext);

  if (isLoading) {
    return;
  }

  return (
    <nav>
      <ul>
        {isSignedIn ? (
          <>
            <li>
              <Link to="/">Add Customer</Link>
            </li>
            <li>
              <Link to="/customer-list">Customer-List</Link>
            </li>
            {/* <li>
              <Link to="/*">Home</Link>
            </li> */}
            {/* <li>
              <Link to="/posts">Posts</Link>
            </li>
            <li>
              <Link to="/addProduct">Add new product</Link>
            </li>
            <li>
              <Link to="/basket">My Basket</Link>
            </li> */}
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
      {isSignedIn && <button onClick={onLogout}>LOGOUT</button>}
    </nav>
  );
};
