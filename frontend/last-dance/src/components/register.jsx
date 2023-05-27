import { useState } from "react";
import { link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
    e.preventDefault();
    // POST request i "http://localhost:5000........"
    axios
      .post("http://localhost:5000/users", formData) //register?
      .then((response) => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  }; // const onHandleSubmit = () => {
  //   alert(
  //     `${formData1.name} ${formData1.surname} registered with ${formData1.email}`
  //   );
  // };

  const handleOnChanges = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  //   const onNameChange = () => {
  //     setName(e.target.value);
  //   };
  return (
    <div>
      <div>
        <h1>Enter your credentials to register here</h1>
      </div>
      <form onSubmit={onHandleSubmit}>
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
          oonChange={handleOnChanges}
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
