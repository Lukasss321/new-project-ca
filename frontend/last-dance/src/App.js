import "./App.css";
import React, { useState, useContext } from "react";
import CustomerList from "./components/CustomerList";
import { Routes, Route } from "react-router-dom";
import { NewCustomer } from "./components/NewCustomer";
import { Login } from "./components/login";
import { Register } from "./components/register";
import { NavBar } from "./components/NavBar";
import { AuthenticationContext } from "./components/AuthenticationContext";
// import { Protected } from "./components/Protected";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// import { useNavigate } from "react-router-dom";

function App() {
  // const { setIsSignedIn } = useContext(AuthenticationContext);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const navigate = useNavigate();
  // const [isLoading, setIsLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsSignedIn(false);
  };
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   axios
  //     .get("http://localhost:5000/token/verify", {
  //       headers: {
  //         authorization: "Bearer " + token,
  //       },
  //     })
  //     .then((response) => {
  //       if (response.data.id) {
  //         setIsSignedIn(true);
  //         navigate("/");
  //       }
  //     });
  // }, []);

  return (
    <>
      <NavBar isSignedIn={isSignedIn} onLogout={handleLogout} />
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        {/* <Route element={<div>Page Nout Found</div>} path="*" /> */}
        {/* <Route element={<Protected isSignedIn={isSignedIn} />}> */}
        <Route element={<CustomerList />} path="/customer-list" />
        <Route element={<NewCustomer />} path="/" />\{/* </Route> */}
        {/* </Route> */}
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
