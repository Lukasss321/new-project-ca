import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContext";
import axios from "axios";

export const Login = () => {
  const { setIsSignedIn } = useContext(AuthenticationContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/users", formData)
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          setIsSignedIn(true);
          navigate("/");
        } else {
          setError(response.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div>
      <div>
        <h1>Enter your credentials to login here</h1>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
      <form onSubmit={handleOnSubmit}>
        <input
          type="email"
          onChange={handleOnChange}
          placeholder="Your email"
        />
        <input
          type="password"
          onChange={handleOnChange}
          placeholder="Your password"
        />
        <button className="submit">Login</button>
        {/* {error && <Error>{error}</Error>} */}
      </form>
      <p>
        Dont't have an account yet?
        <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default Login;

// const handleOnSubmit = () => {
//   navigate("/register");
