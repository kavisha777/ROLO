import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contact: { type: String },
  address: { type: String },
  idProof: { type: String }, // file path or URL
  role: { type: String, enum: ['user', 'seller', 'admin'], default: 'user' },
}, { timestamps: true });

export default mongoose.model('User', userSchema);
