import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

function AdminApply() {
  const [formDetails, setFormDetails] = useState({
    hospitalName: "",
    address: "",
    password: "",
    hospitalPicture: "",
    doctors: [],
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

      const { hospitalName, address, password, hospitalPicture, doctors } = formDetails;

      // Add validation for required fields
      if (!hospitalName || !address || !password || !hospitalPicture) {
        return toast.error("All fields are required");
      }

      // Add additional validation if needed

      await toast.promise(
        axios.post("/admin/createadmin", {
          hospitalName,
          address,
          password,
          hospitalPicture,
          doctors,
        }),
        {
          loading: "Submitting application...",
          success: "Admin created successfully",
          error: "Unable to create admin",
        }
      );
    } catch (error) {
      console.error("Error creating admin:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="apply-admin-section flex-center">
      <div className="apply-admin-container flex-center">
        <h2 className="form-heading">Apply For Admin</h2>
        <form onSubmit={formSubmit} className="register-form">
          {/* Add input fields for hospitalName, address, password, hospitalPicture */}
          <input
            type="text"
            name="hospitalName"
            value={formDetails.hospitalName}
            onChange={inputChange}
            placeholder="Hospital Name"
          />
          <input
            type="text"
            name="address"
            value={formDetails.address}
            onChange={inputChange}
            placeholder="Address"
          />
          <input
            type="password"
            name="password"
            value={formDetails.password}
            onChange={inputChange}
            placeholder="Password"
          />
          <input
            type="text"
            name="hospitalPicture"
            value={formDetails.hospitalPicture}
            onChange={inputChange}
            placeholder="Hospital Picture"
          />
          {/* Allow multiple doctors */}
          <input
            type="text"
            name="doctors"
            value={formDetails.doctors}
            onChange={inputChange}
            placeholder="Doctors (Comma-separated list)"
          />
          <button type="submit" className="btn form-btn">
            Apply for Admin
          </button>
        </form>
      </div>
    </section>
  );
}

export default AdminApply;
