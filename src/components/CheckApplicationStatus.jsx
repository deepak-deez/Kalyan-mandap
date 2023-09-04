import React from "react";

const CheckApplicationStatus = () => {
  return (
    <div>
      <h1>Check Application Status</h1>
      <div>
        <label htmlFor="">Search type</label>
        <select name="searchType" id="">
          <option value="RegId">Registration id</option>
          <option value="RegDate">Registration date</option>
        </select>
        <label htmlFor="">Registration number</label>
        <input type="number" />
      </div>
    </div>
  );
};

export default CheckApplicationStatus;
