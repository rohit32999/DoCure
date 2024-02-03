const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();

const connectToDB = () => {
  return mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log("Error: ", error);
    return error;
  });
};

module.exports = connectToDB;