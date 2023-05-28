import "./App.css";
import React, { useEffect, useContext, useState } from "react";
import CustomerList from "./components/CustomerList";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import { NewCustomer } from "./components/NewCustomer";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { NavBar } from "./components/NavBar";
import { AuthenticationContext } from "./components/AuthenticationContext";
import axios from "axios";
import Protected from "./components/Protected";
import "./App.css";

function App() {
  const {isSignedIn, setIsSignedIn} = useContext(AuthenticationContext);
  const {pathname} = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {

    setIsLoading(true);

    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:5000/token/verify", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        if (response.data.id) {
          setIsSignedIn(true);
          return;
        }

        setIsSignedIn(false);
      })
      .catch(error => {
        setIsSignedIn(false);

        if (error.response.status === 401) {
          localStorage.removeItem("token")
        }
      })
      .finally(() => setIsLoading(false));

  }, [pathname, setIsSignedIn]);

  if (isLoading) return null;

  return (
    <div>
      <NavBar />
      <Routes>
        <Route element={isSignedIn ? <Navigate to="/" replace /> : <Login />} path="/login" />
        <Route element={isSignedIn ? <Navigate to="/" replace /> : <Register />} path="/register" />
        <Route
          path="/customer-list"
          element={
            <Protected>
              <CustomerList />
            </Protected>
          }
        />
        <Route
          path="/add-new-customer"
          element={
            <Protected>
              <NewCustomer />
            </Protected>
          }
        />
        <Route path="/" element={<Navigate to="/add-new-customer" replace/>} />
        <Route element={<div>Page Nout Found</div>} path="*" />
      </Routes>
    </div>
  );
}

export default App;
