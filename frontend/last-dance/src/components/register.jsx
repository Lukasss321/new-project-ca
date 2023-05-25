import { useState } from "react";
import { link } from "react-router-dom";

export const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div>
        <h1>Enter your credentials to register here</h1>
      </div>
      <form>
        <input
          type="text"
          placeholder="Your name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Your last name"
          onChange={(e) => setSurname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your email address"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Your password"
          oonChange={(e) => setPassword(e.target.value)}
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
