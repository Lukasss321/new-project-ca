import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthenticationContext } from "./AuthenticationContext";

export const Login = () => {
  const {setIsSignedIn} = useContext(AuthenticationContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/login", formData) 
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          setIsSignedIn(true);
          navigate("/add-new-customer");
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
    <div className="auth-form-container">
      <div>
        <h1>Welcome to Virgis travels the world Ltd!</h1>
        <h3>Enter your credentials to login here</h3>
        {/* <button onClick={() => navigate(-1)}>Go Back</button> */}
      </div>
      <form  className="login-Form"  onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          onChange={handleOnChange}
          placeholder="Please Enter Your Email"
        />
        <input
          name="password"
          type="password"
          onChange={handleOnChange}
          placeholder="Please Enter Your password"
        />
        <button className="submit">Login</button>
          {error && <div>{error}</div>}
      </form>
      <p className="p">
        Dont't have an account yet?
        <a href="/register">  Register here</a>
      </p>
    </div>
  );
};

export default Login;
