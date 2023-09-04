import React from "react";

const CheckApplicationStatus = () => {
  return (
    <div className="m-5">
      <h1 className="font-bold text-2xl">Check Application Status</h1>
      <div className="flex items-center gap-2">
        <div className="flex  gap-4">
          <label className="font-bold" htmlFor="">
            Search type
          </label>
          <select name="searchType" id="">
            <option value="RegId">Registration id</option>
            <option value="RegDate">Registration date</option>
          </select>
        </div>
        <div className="flex  gap-4">
          <label className="font-bold" htmlFor="">
            Registration number
          </label>
          <input type="number" placeholder="Registration No" />
        </div>
        <button className="bg-yellow-400 rounded-md px-3 py-2">Show</button>
      </div>

      <div>
        <table className="flex flex-col ">
          <tr className="flex mt-8 justify-around">
            <th>Sl.#</th>
            <th>Registration No.</th>
            <th>Applied On</th>
            <th>Booking Date</th>
            <th>Status</th>
            <th>Cancel</th>
            <th>Lawn</th>
            <th>Receipts</th>
          </tr>
          {/* to be mapped */}
          <tr></tr>
          {/* to be mapped */}
        </table>
      </div>
    </div>
  );
};

export default CheckApplicationStatus;
