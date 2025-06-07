import User from '../models/User.js';

// GET /api/user/profile
export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password'); // use _id, not id
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT /api/user/profile
export const updateUserProfile = async (req, res) => {
  try {
    const updates = req.body;
    const user = await User.findByIdAndUpdate(
      req.user._id, // use _id
      updates,
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ message: 'Profile updated', user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};




// Upgrade user to seller
export const upgradeToSeller = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.role = 'seller';
    await user.save();

    res.status(200).json({ message: 'Upgraded to seller', user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};