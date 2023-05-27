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
    <div>
      <div>
        <h1>Enter your credentials to register here</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleOnChanges}
        />
        <input
          name="surname"
          type="text"
          placeholder="Your last name"
          onChange={handleOnChanges}
        />
        <input
          name="email"
          type="email"
          placeholder="Your email address"
          onChange={handleOnChanges}
        />
        <input
          name="password"
          type="password"
          placeholder="********"
          onChange={handleOnChanges}
        />
        <button className="submit">Login</button>
      </form>
      <p>
        Already have an account ?<a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default Register;
