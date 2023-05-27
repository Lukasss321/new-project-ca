import "./App.css";
import React, { useEffect, useContext } from "react";
import CustomerList from "./components/CustomerList";
import { Routes, Route } from "react-router-dom";
import { NewCustomer } from "./components/NewCustomer";
import { Login } from "./components/login";
import { Register } from "./components/register";
import { NavBar } from "./components/NavBar";
import { AuthenticationContext } from "./components/AuthenticationContext";
import axios from "axios";
import Protected from "./components/Protected";

function App() {
  const { isSignedIn, setIsSignedIn } = useContext(AuthenticationContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5000/token/verify", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        console.log("LOGIN: ", response);
        if (response.data.id) {
          setIsSignedIn(true);
        }
      });
  }, [setIsSignedIn]);

  return (
    <div>
      <NavBar />
      <Routes>
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route
          path="/customer-list"
          element={
            <Protected isSignedIn={isSignedIn}>
              <CustomerList />
            </Protected>
          }
        />
        <Route
          path="/"
          element={
            <Protected isSignedIn={isSignedIn}>
              <NewCustomer />
            </Protected>
          }
        />
        {/* <Route element={<div>Page Nout Found</div>} path="*" /> */}
      </Routes>
    </div>
  );
}

export default App;
