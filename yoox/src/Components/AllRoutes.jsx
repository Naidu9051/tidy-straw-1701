import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './Home/Home'
import CustomerCare from "./Topnav/CustomerCare";
import Login from "./Topnav/Login";
import Register from "./Topnav/Register";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/customercare" element={<CustomerCare />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
