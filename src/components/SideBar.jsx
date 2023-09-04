import React, { useState } from "react";

const SideBar = () => {
  const [option, setOption] = useState("booking");

  return (
    <div className="w-[30%] bg-white">
      <div onClick={() => setOption("booking")}>Book Kalyan mandap</div>
      <div onClick={() => setOption("checkApplicationStatus")}>
        Check Application Status
      </div>
      <div onClick={() => setOption("checkAvailability")}>
        Check Availability
      </div>
    </div>
  );
};

export default SideBar;
