const Appointment = require("../model/appointment");
const Notification = require("../model/notification");
const User = require("../model/user");

const getallappointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate("userId").populate("doctorId");
    return res.send(appointments);
  } catch (error) {
    res.status(500).send("Unable to get appointments");
  }
};

const bookappointment = async (req, res) => {
  try {
    const appointment = new Appointment({
      date: req.body.date,
      time: req.body.time,
      userId: req.body.userId,
      doctorId: req.body.doctorId
    });
    const result = await appointment.save();
    if (!result) {
      return res.status(500).send("Unable to book appointment");
    }
    return res.status(201).send("Appointment booked successfully");
  } catch (error) {
    res.status(500).send("Unable to book appointment");
  }
};

const updateappointment = async (req, res) => {
  try {
    const result = await Appointment.findByIdAndUpdate(req.params.id, {
      date: req.body.date,
      time: req.body.time,
      userId: req.body.userId,
      doctorId: req.body.doctorId
    });
    if (!result) {
      return res.status(500).send("Unable to update appointment");
    }
    return res.status(201).send("Appointment updated successfully");
  } catch (error) {
    res.status(500).send("Unable to update appointment");
  }
};

const deleteappointment = async (req, res) => {
  try {
    const result = await Appointment.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(500).send("Unable to delete appointment");
    }
    return res.send("Appointment deleted successfully");
  } catch (error) {
    res.status(500).send("Unable to delete appointment");
  }
};

module.exports = {
  getallappointments,
  bookappointment,
  updateappointment,
  deleteappointment,
};