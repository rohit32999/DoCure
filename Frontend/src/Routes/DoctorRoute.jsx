import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.baseURL = "";

function DoctorApply() {
  const [formDetails, setFormDetails] = useState({
    userId: "", 
    degree: "",
    experience: "",
    fees: "",
    hospital: "",
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

      const { userId, degree, experience, fees, hospital } = formDetails;

      if (!userId || !degree || !experience || !fees || !hospital) {
        return toast.error("All fields are required");
      }

      await toast.promise(
        axios.post("/doctor/applyfordoctor", {
          userId,
          degree,
          experience,
          fees,
          hospital,
        }),
        {
          loading: "Submitting application...",
          success: "Thank you for submitting the application.",
          error: "Unable to submit application",
        }
      );
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="apply-doctor-section flex-center">
      <div className="apply-doctor-container flex-center">
        <h2 className="form-heading">Apply For Doctor</h2>
        <form onSubmit={formSubmit} className="register-form">
          {/* Add input fields for userId, degree, experience, fees, and hospital */}
          <input
            type="text"
            name="userId"
            value={formDetails.userId}
            onChange={inputChange}
            placeholder="User ID"
          />
          <input
            type="text"
            name="degree"
            value={formDetails.degree}
            onChange={inputChange}
            placeholder="Degree"
          />
          <input
            type="text"
            name="experience"
            value={formDetails.experience}
            onChange={inputChange}
            placeholder="Experience"
          />
          <input
            type="text"
            name="fees"
            value={formDetails.fees}
            onChange={inputChange}
            placeholder="Fees"
          />
          <input
            type="text"
            name="hospital"
            value={formDetails.hospital}
            onChange={inputChange}
            placeholder="Hospital"
          />
          <button type="submit" className="btn form-btn">
            Apply for Doctor
          </button>
        </form>
      </div>
    </section>
  );
}

export default DoctorApply;
