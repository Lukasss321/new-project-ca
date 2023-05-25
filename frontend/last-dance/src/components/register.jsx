import { useState } from "react";
import { link } from "react-router-dom";

export const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleSubmit = () => {
    alert(
      `${formData1.name} ${formData1.surname} registered with ${formData1.email}`
    );
  };

  const [formData1, setFormData1] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
  });

  const handleOnChanges = (event) => {
    setFormData1({
      ...formData1,
      [event.target.name]: event.target.value,
    });
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
          placeholder="Your name"
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
          placeholder="Your password"
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
