import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/register", formData)
      .then((response) => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  }; 
  

  const handleOnChanges = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="auth-form-container">
      <div>
        <h1>Welcome!</h1>
        <h3>Enter your credentials to register here</h3>
      </div>
      <form className="register-form" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Please Enter Your Name"
          onChange={handleOnChanges}
        />
        <input
          name="surname"
          type="text"
          placeholder="Please Enter Your Last Name"
          onChange={handleOnChanges}
        />
        <input
          name="email"
          type="email"
          placeholder="Please Enter Your Email Address"
          onChange={handleOnChanges}
        />
        <input
          name="password"
          type="password"
          placeholder="Please Enter Your Password ********"
          onChange={handleOnChanges}
        />
        <button className="btnRegister">Login</button>
      </form>
      <p className="p">
        Already have an account ?<a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default Register;
