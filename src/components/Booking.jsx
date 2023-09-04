import React, { useEffect } from "react";
import axios from "axios";

const Booking = () => {
  async function postData(formData) {
    const body = formData;
    // const data = await axios.get("http://localhost:4000");
    const data = await axios.post("http://localhost:4000/postData", body);

    console.log(data);
  }
  return (
    <div>
      <h1 className="text-2xl text-center">Online Kalyan Mandap Booking</h1>
      <div className="p-5 ">
        <h2 className="text-xl">Fill the below details</h2>
        <form className=" flex flex-col gap-3">
          <div>
            <label for="bookingDate">Booking Date *</label>
            <input
              type="date"
              id="bookingDate"
              placeholder="Select Booking date"
              name="bookingDate"
            ></input>
          </div>

          <div>
            <label for="kalyanMandap">Select Kalyan Mandap *</label>
            <select id="kalyanMandap" name="kalyanMandap">
              <option value="--Select--">--Select--</option>
              <option value="BDA Kalyan Mandap">BDA Kalyan Mandap</option>
              <option value="Badagada Kalyan mandap">
                Badagada Kalyan mandap
              </option>
            </select>
          </div>

          <div>
            <label for="purpose">Purpose of Booking *</label>
            <select id="purpose" name="purpose">
              <option value="--Select--">--Select--</option>
              <option value="Audition">Audition</option>
              <option value="Birthday party">Birthday party</option>
              <option value="Conference">Conference</option>
            </select>
          </div>
          <div>
            <label for="amount">Amount *</label>
            <input type="text" id="amount" name="amount"></input>
          </div>
          <div>
            <label for="bookingType">Select Type *</label>
            <input
              type="radio"
              id="individual"
              name="bookingType"
              value="Individual"
            ></input>
            <label for="individual">Individual</label>
            <input
              type="radio"
              id="organisation"
              name="bookingType"
              value="Organisation"
            ></input>
            <label for="organisation">Organisation</label>
          </div>
          <div>
            <label for="applicantName">Applicant Name *</label>
            <input
              type="text"
              id="applicantName"
              placeholder=" Enter Applicant Name"
              name="applicantName"
            ></input>

            <label for="fatherName">Father/Husband's Name *</label>
            <input
              type="text"
              id="fatherName"
              name="fatherName"
              placeholder="Enter Father/Husband's Name"
            ></input>
          </div>
          <div>
            <label for="plotNo">Plot No./House No. *</label>
            <input
              type="text"
              id="plotNo"
              name="plotNo"
              placeholder="Enter Plot No."
            ></input>

            <label for="locality">Area/Locality *</label>
            <input
              type="text"
              id="locality"
              name="locality"
              placeholder="Enter Area/Locality Name"
            ></input>
          </div>

          <div>
            <label for="country">Country *</label>
            <select id="country" name="country">
              <option value="India" selected>
                India
              </option>
            </select>

            <label for="state">State *</label>
            <select id="state" name="state">
              <option value="--Select--">--Select--</option>
              <option value="Odisha">Odisha</option>
              <option value="Chattisgarh">Chattisgarh</option>
              <option value="Bihar">Bihar</option>
              <option value="West bengal">West bengal</option>
            </select>
          </div>
          <div>
            <label for="city">City *</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Enter City"
            ></input>

            <label for="pin">PIN *</label>
            <input
              type="text"
              id="pin"
              name="pin"
              placeholder="Enter PIN"
            ></input>
          </div>
          <div>
            <label for="email">Applicant Email ID *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Applicant Email ID"
            ></input>

            <label for="mobile">Mobile No. *</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              placeholder="Enter mobile Number"
            ></input>
          </div>
          <div>
            <label for="idType">Select ID *</label>
            <select id="idType" name="idType">
              <option value="--Select--">--Select--</option>
              Add options for ID Type here
            </select>

            <label for="idNumber">ID No. *</label>
            <input
              type="text"
              id="idNumber"
              name="idNumber"
              placeholder="Enter ID No."
            ></input>
          </div>

          <div>
            <label for="idProof">Upload Id Proof *</label>
            <input type="file" id="idProof" name="idProof"></input>
          </div>
          <label for="terms">Read terms & conditions*</label>

          <div>
            <input type="checkbox" id="terms" name="terms"></input>
            <label for="terms">
              I undertake to abide by the terms and conditions mentioned
            </label>
          </div>
          <br></br>
          <input
            type="submit"
            className=" border-2 border-black w-[80px]"
            value="Save and Continue"
            onClick={(e) => {
              e.preventDefault();
              postData({ regId: "Jii" });
              console.log("Submit reg form here");
            }}
          ></input>
          <input type="reset" value="reset" />
        </form>
      </div>
    </div>
  );
};

export default Booking;
