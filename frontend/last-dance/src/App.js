import "./App.css";
import React, { useState, useContext } from "react";
import CustomerList from "./components/CustomerList";
import { Routes, Route } from "react-router-dom";
import { NewCustomer } from "./components/NewCustomer";
import { Login } from "./components/login";
import { Register } from "./components/register";
import { NavBar } from "./components/NavBar";
import { AuthenticationContext } from "./components/AuthenticationContext";
import { Protected } from "./components/Protected";

function App() {
  const { setIsSignedIn } = useContext(AuthenticationContext);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsSignedIn(false);
  };

  return (
    <>
      <NavBar isLoading={isLoading} onLogout={handleLogout} />
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        {/* <Route element={<div>Page Nout Found</div>} path="*" /> */}
        {/* <Route element={<Protected isSignedIn={isSignedIn} />}> */}
        <Route element={<CustomerList />} path="/customer-list" />
        <Route element={<NewCustomer />} path="/" />\{/* </Route> */}
      </Routes>
    </>
  );
}

export default App;
// {
//   /* <nav>
//         <ul>
//           <li>
//             <a href="/login">Login</a>
//           </li>
//           <li>
//             <a href="/register">Register</a>
//           </li>

//           <li>
//             <a href="/customer-list">Customer list</a>
//           </li>
//           <li>
//             <a href="/">Add customer</a>
//           </li>
//         </ul>
//       </nav> */
// }
