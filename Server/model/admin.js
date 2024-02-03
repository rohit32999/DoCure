const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema({
  hospitalName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  doctors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor"
  }],
  password: {
    type: String,
    required: true,
    minLength: 5,
  },
  hospitalPicture: {
    type: String,
  }
});

const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema);

module.exports = Admin;