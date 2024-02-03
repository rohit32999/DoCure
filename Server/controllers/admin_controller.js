const Admin = require("../model/admin");

const registerAdmin = async (req, res) => {
  try {
    const newAdmin = new Admin(req.body);
    const admin = await newAdmin.save();
    res.status(201).json(admin);
  } catch (error) {
    res.status(500).json({ error: 'Error registering new admin' });
  }
};

const loginAdmin = async (req, res) => {
  try {
    const { hospitalName, password } = req.body;
    const admin = await Admin.findOne({ hospitalName });
    if (!admin) {
      return res.status(400).json({ error: 'Admin does not exist' });
    }
    if (admin.password !== password) {
      return res.status(400).json({ error: 'Password is not correct' });
    }
    res.status(200).json({ message: 'Admin logged in' });
  } catch (error) {
    res.status(500).json({ error: 'Error logging in admin' });
  }
};

module.exports = {
  registerAdmin,
  loginAdmin,
};