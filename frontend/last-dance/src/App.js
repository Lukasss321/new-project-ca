import "./App.css";
import CustomerList from "./components/CustomerList";
import { Routes, Route } from "react-router-dom";
import { NewCustomer } from "./components/NewCustomer";

function App() {
  return (
    <>
      <nav>
        <li>
          <a href="/">Home</a>
        </li>
        <ul>
          <li>
            <a href="/customer-list">Customer list</a>
          </li>
          <li>
            <a href="/">Add customer</a>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route element={<CustomerList />} path="/customer-list" />
        <Route element={<NewCustomer />} path="/" />
      </Routes>
    </>
  );
}

export default App;
