const Doctor = require("../model/doctor");
const User = require("../model/user");
const Notification = require("../model/notification");

const getalldoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find().populate("name");
    return res.send(doctors);
  } catch (error) {
    res.status(500).send("Unable to get doctors");
  }
};

const getdoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id).populate("name");
    return res.send(doctor);
  } catch (error) {
    res.status(500).send("Unable to get doctor");
  }
};

const createdoctor = async (req, res) => {
  try {
    const doctor = new Doctor(req.body);
    const result = await doctor.save();
    if (!result) {
      return res.status(500).send("Unable to create doctor");
    }
    return res.status(201).send("Doctor created successfully");
  } catch (error) {
    res.status(500).send("Unable to create doctor");
  }
};

const updatedoctor = async (req, res) => {
  try {
    const result = await Doctor.findByIdAndUpdate(req.params.id, req.body);
    if (!result) {
      return res.status(500).send("Unable to update doctor");
    }
    return res.status(201).send("Doctor updated successfully");
  } catch (error) {
    res.status(500).send("Unable to update doctor");
  }
};

const deletedoctor = async (req, res) => {
  try {
    const result = await Doctor.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(500).send("Unable to delete doctor");
    }
    return res.send("Doctor deleted successfully");
  } catch (error) {
    res.status(500).send("Unable to delete doctor");
  }
};

module.exports = {
  getalldoctors,
  getdoctor,
  createdoctor,
  updatedoctor,
  deletedoctor,
};