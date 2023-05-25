import "./App.css";
import CustomerList from "./components/CustomerList";
import { Routes, Route } from "react-router-dom";
import { NewCustomer } from "./components/NewCustomer";
import { Login } from "./components/login";
import { Register } from "./components/register";

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Register</a>
          </li>

          <li>
            <a href="/customer-list">Customer list</a>
          </li>
          <li>
            <a href="/">Add customer</a>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route element={<div>Page Nout Found</div>} path="*" />
        <Route element={<CustomerList />} path="/customer-list" />
        <Route element={<NewCustomer />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
      </Routes>
    </>
  );
}

export default App;
