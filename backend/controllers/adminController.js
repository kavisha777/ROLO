// controllers/adminController.js
import User from '../models/User.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password'); // exclude passwords for security
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
