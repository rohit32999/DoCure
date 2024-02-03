import React, { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { useHistory } from "react-router-dom";

axios.defaults.baseURL = ""; // Set your server base URL

function UserApply() {
  const history = useHistory();

  const [formDetails, setFormDetails] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    isAdmin: false,
    isDoctor: false,
    age: "",
    gender: "neither",
    status: "pending",
    pic: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
  });

  const inputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormDetails({
      ...formDetails,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const formSubmit = async (e) => {
    try {
      e.preventDefault();

      const { firstname, lastname, email, password, isAdmin, isDoctor,age,
        gender,
        status,
        pic } =
        formDetails;

      if (!firstname || !lastname || !email || !password) {
        return toast.error("All fields are required");
      }

      await toast.promise(
        axios.post("/user/apply", {
          firstname,
          lastname,
          email,
          password,
          isAdmin,
          isDoctor,
          age,
        gender,
        status,
        pic,
          // Add other fields as needed
        }),
        {
          loading: "Submitting application...",
          success: "Thank you for applying.",
          error: "Unable to submit application",
        }
      );

      // Redirect based on user's role
      if (isAdmin) {
        history.push("/AdminRoute");
      } else if (isDoctor) {
        history.push("/DoctorRoute");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="apply-user-section flex-center">
      <div className="apply-user-container flex-center">
        <h2 className="form-heading">Apply As User</h2>
        <form onSubmit={formSubmit} className="register-form">
          <input
            type="text"
            name="firstname"
            value={formDetails.firstname}
            onChange={inputChange}
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastname"
            value={formDetails.lastname}
            onChange={inputChange}
            placeholder="Last Name"
          />
          <input
            type="email"
            name="email"
            value={formDetails.email}
            onChange={inputChange}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={formDetails.password}
            onChange={inputChange}
            placeholder="Password"
          />
          <label>
            <input
              type="checkbox"
              name="isAdmin"
              checked={formDetails.isAdmin}
              onChange={inputChange}
            />
            Apply as Admin
          </label>
          <label>
            <input
              type="checkbox"
              name="isDoctor"
              checked={formDetails.isDoctor}
              onChange={inputChange}
            />
            Apply as Doctor
            <input
            type="number"
            name="age"
            value={formDetails.age}
            onChange={inputChange}
            placeholder="Age"
          />
          <select
            name="gender"
            value={formDetails.gender}
            onChange={inputChange}
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="neither">Neither</option>
          </select>
          <select
            name="status"
            value={formDetails.status}
            onChange={inputChange}
          >
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
          </select>
          <input
            type="text"
            name="pic"
            value={formDetails.pic}
            onChange={inputChange}
            placeholder="Profile Picture URL"
          />
          </label>
          {/* Add other input fields as needed */}
          <button type="submit" className="btn form-btn">
            Apply as User
          </button>
        </form>
      </div>
    </section>
  );
}

export default UserApply;
