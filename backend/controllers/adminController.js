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




// Add this function
export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, contact, address, role } = req.body;
  
    try {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        { name, email, contact, address, role },
        { new: true, runValidators: true }
      );
  
      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User updated', updatedUser });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  


  // Add this function
export const deleteUser = async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedUser = await User.findByIdAndDelete(id);
  
      if (!deletedUser) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      res.status(200).json({ message: 'User deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  