import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

function AppointmentStatus() {
  const [formDetails, setFormDetails] = useState({
    userId: "",
    doctorID: "", // Assuming you have a separate doctorID field
    date: "",
    time: "",
    status: "pending",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const formSubmit = async (e) => {
    try {
      e.preventDefault();

      const { userId, doctorID, date, time, status } = formDetails;

      // Add validation for required fields
      if (!userId || !doctorID || !date || !time || !status) {
        return toast.error("All fields are required");
      }

      // Add additional validation if needed

      await toast.promise(
        axios.post("/appointment/applyforappointment", {
          userId,
          doctorID,
          date,
          time,
          status,
        }),
        {
          loading: "Submitting application...",
          success: "Appointment submitted successfully",
          error: "Unable to get appointment",
        }
      );
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="apply-appointment-section flex-center">
      <div className="apply-appointment-container flex-center">
        <h2 className="form-heading">Apply For Appointment</h2>
        <form onSubmit={formSubmit} className="appointment-form">
          {/* Add input fields for userId, doctorID, date, time, and status */}
          <input
            type="text"
            name="userId"
            value={formDetails.userId}
            onChange={inputChange}
            placeholder="User ID"
          />
          <input
            type="text"
            name="doctorID"
            value={formDetails.doctorID}
            onChange={inputChange}
            placeholder="Doctor ID"
          />
          <input
            type="date"
            name="date"
            value={formDetails.date}
            onChange={inputChange}
            placeholder="Date"
          />
          <input
            type="time"
            name="time"
            value={formDetails.time}
            onChange={inputChange}
            placeholder="Time"
          />
          <select
            name="status"
            value={formDetails.status}
            onChange={inputChange}
          >
            <option value="pending">Pending</option>
            <option value="accepted">Accepted</option>
          </select>
          <button type="submit" className="btn form-btn">
            Apply for Appointment
          </button>
        </form>
      </div>
    </section>
  );
}

export default AppointmentStatus;
