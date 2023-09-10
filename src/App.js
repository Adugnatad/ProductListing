import "./App.css";
import React from "react";
import Signup from "./pages/Signup.page";
import Login from "./pages/Login.page";
import Header from "./components/Header/Header";
import AIGeneration from "./components/AIGeneration/AIGeneration";
import TableListing from "./components/TableListing/TableListing";
import Account from "./components/Account/Account";
import Upgrade from "./components/Ugrade/Upgrade";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/listing" element={<TableListing />} />
        <Route path="/home" element={<AIGeneration generation={true} />} />
        <Route path="/new" element={<AIGeneration generation={false} />} />
        <Route path="/upgrade" element={<Upgrade />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
