import React from "react";

const CheckAvailability = () => {
  return (
    <div className="m-5">
      <h1 className="font-bold text-2xl">
        Check Availability For Mandap Booking
      </h1>

      <div className="flex gap-3 mt-5 items-center">
        <label htmlFor="select kalyan mandap">Select Kalyan Mandap *</label>
        <input
          type="dropdown"
          className="border-2 border-black rounded-md px-2"
        />
      </div>
      <div className="mt-5 flex gap-10">
        <p>Booked with lawn </p>

        <p> Booked without Lawn </p>

        <p> Under maintainance</p>
      </div>
    </div>
  );
};

export default CheckAvailability;
