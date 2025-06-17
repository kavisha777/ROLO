import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, default: "" },
  image: { type: String, default: "" }, // you can add array later if you support multiple
  pricePerDay: { type: Number, required: true },
  advanceAmount: { type: Number, required: true }, 
  category: {
    type: String,
    enum: ['electronics', 'furniture', 'accessories', 'clothing', 'books', 'other'],
    required: true
  },
  available: { type: Boolean, default: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

export default mongoose.model('Item', itemSchema);
