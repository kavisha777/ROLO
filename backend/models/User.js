import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contactNumber: String,
  address: String,
  idProof: String, // URL to uploaded ID proof
  role: { type: String, enum: ['user', 'seller', 'admin'], default: 'user' },
  isSellerApproved: { type: Boolean, default: false }, // Set true after admin approves
}, { timestamps: true });

export default mongoose.model('User', userSchema);
