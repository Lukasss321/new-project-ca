import "./App.css";
import CustomerList from "./components/CustomerList";
import { Routes, Route } from "react-router-dom";
import { NewCustomer } from "./components/NewCustomer";

function App() {
  return (
    <Routes>
      <Route element={<CustomerList />} path="/" />
      <Route element={<NewCustomer />} path="/add" />
    </Routes>
  );
}

export default App;
//  <CustomerList />;
