import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Dashboard from "./components/Dashboard";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Banner />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
