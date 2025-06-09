import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  image: String,
  pricePerDay: Number,
  category: { type: String, enum: ['electronics', 'furniture', 'vehicles', 'clothing', 'books', 'other'], required: true },
  available: { type: Boolean, default: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

export default mongoose.model('Item', itemSchema);





