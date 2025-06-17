import mongoose from 'mongoose';

const sellerRequestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  selectedPackage: { type: mongoose.Schema.Types.ObjectId, ref: 'Package', required: true },
  paymentStatus: { type: String, enum: ['pending', 'completed'], default: 'pending' },
  approved: { type: Boolean, default: false }
}, { timestamps: true });

export default mongoose.model('SellerRequest', sellerRequestSchema);
