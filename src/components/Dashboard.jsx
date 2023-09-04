import React, { useState } from "react";
import Booking from "./Booking";
import CheckApplicationStatus from "./CheckApplicationStatus";
import CheckAvailability from "./CheckAvailability";

const Dashboard = () => {
  const [option, setOption] = useState("booking");
  return (
    <div className=" h-screen mx-5">
      <div className="flex h-100 m-auto justify-center  mt-10 ">
        <div className="w-[30%] bg-white">
          <div className="cursor-pointer" onClick={() => setOption("booking")}>
            Book Kalyan mandap
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setOption("checkApplicationStatus")}
          >
            Check Application Status
          </div>
          <div
            className="cursor-pointer"
            onClick={() => setOption("checkAvailability")}
          >
            Check Availability
          </div>
        </div>
        <div className="w-[50%] ">
          <div>
            {option === "booking" && <Booking />}
            {option === "checkApplicationStatus" && <CheckApplicationStatus />}
            {option === "checkAvailability" && <CheckAvailability />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
