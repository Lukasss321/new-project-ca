import { useState } from "react";

export const Login = () => {
  return (
    <div>
      <div>
        <h1>Enter your credentials to login here</h1>
      </div>
      <form>
        <input type="email" placeholder="Your email@email.com" />
        <input type="password" placeholder="Your password" />
        <button className="submit">Login</button>
      </form>
      <p>
        Dont't have an account yet?
        <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default Login;
