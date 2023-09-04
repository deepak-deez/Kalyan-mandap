import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="app-body ">
      <div className="mx-10 bg-[#FFFBEC] p-5 border-2 rounded-md border-black">
        <Link className="hover:text-[#ad8905]" to="/dashboard">
          <h1 className="text-2xl text-center ">Kalyan Mandap Booking</h1>
        </Link>
        <p className="my-5">
          Service Provider : Bhubaneswar Development Authority (BDA),
          Bhubaneswar Municipal Corporation (BMC)
        </p>
        <p className=" text-center">
          Book a Kalyan mandap online for organizing your fairs and functions.
        </p>
        <ul className="list-disc mx-5 my-5 grid grid-cols-2">
          <li>
            {" "}
            <Link className="hover:text-[#ad8905]" to="/dashboard">
              Book Kalyan mandap
            </Link>
          </li>
          <li>
            {" "}
            <Link className="hover:text-[#ad8905]" to="/dashboard">
              Check Application Status
            </Link>
          </li>
          <li>
            {" "}
            <Link className="hover:text-[#ad8905]" to="/dashboard">
              Check Availability
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Banner;
