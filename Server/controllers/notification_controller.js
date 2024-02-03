const Notification = require("../model/notification");

const getallnotifs = async (req, res) => {
  try {
    const notifs = await Notification.find({ userId: req.params.id });
    return res.send(notifs);
  } catch (error) {
    res.status(500).send("Unable to get all notifications");
  }
};

const createnotif = async (req, res) => {
  try {
    const notif = new Notification(req.body);
    const result = await notif.save();
    if (!result) {
      return res.status(500).send("Unable to create notification");
    }
    return res.status(201).send("Notification created successfully");
  } catch (error) {
    res.status(500).send("Unable to create notification");
  }
};

const updatenotif = async (req, res) => {
  try {
    const result = await Notification.findByIdAndUpdate(req.params.id, req.body);
    if (!result) {
      return res.status(500).send("Unable to update notification");
    }
    return res.status(201).send("Notification updated successfully");
  } catch (error) {
    res.status(500).send("Unable to update notification");
  }
};

const deletenotif = async (req, res) => {
  try {
    const result = await Notification.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(500).send("Unable to delete notification");
    }
    return res.send("Notification deleted successfully");
  } catch (error) {
    res.status(500).send("Unable to delete notification");
  }
};

module.exports = {
  getallnotifs,
  createnotif,
  updatenotif,
  deletenotif,
};