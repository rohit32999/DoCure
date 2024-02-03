const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  degree: {
    type: String,
    required: [true, "Example: Doctor of Medicine"],
  },
  experience: {
    type: String,
    required: [true, "Example: 5 years"],
  },
  hospital: {
    type: String,
    required: [true, "Example: City Hospital"],
  },
  name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
});

doctorSchema.pre("save", async function (next) {
  const user = await mongoose.model("User").findById(this.get("name"));
  if (!user || !user.isDoctor) {
    throw new Error("User must be a doctor to create a Doctor profile");
  }

  next();
});

module.exports = mongoose.model("Doctor", doctorSchema);