import mongoose from 'mongoose';

const rentSchema = new mongoose.Schema({
  item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required: true },
  renter: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  status: {
    type: String,
    enum: ['pending', 'approved', 'confirmed', 'in-use', 'returned', 'completed', 'cancelled', 'rejected'],
    default: 'pending'
  },
  
  advancePaid: { type: Number, default: 0 },

  // ✅ New field to save payment metadata
  paymentDetails: {
    transactionId: { type: String },
    method: { type: String },
    amount: { type: Number },
    paidAt: { type: Date }
  }

}, { timestamps: true });

export default mongoose.model('Rent', rentSchema);
