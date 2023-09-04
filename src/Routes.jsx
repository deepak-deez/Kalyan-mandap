import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Banner from "./components/Banner";
import Dashboard from "./components/Dashboard";
import Booking from "./components/Booking";
import CheckApplicationStatus from "./components/CheckApplicationStatus";
import CheckAvailability from "./components/CheckAvailability";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Banner />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/booking" element={<Booking />} />
        <Route
          exact
          path="/checkApplicationStatus"
          element={<CheckApplicationStatus />}
        />
        <Route
          exact
          path="/checkAvailability"
          element={<CheckAvailability />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
