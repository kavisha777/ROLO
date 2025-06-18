import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contactNumber: String,
  address: String,
  idProof: String, // URL to uploaded ID proof
  role: { type: String, enum: ['user', 'seller', 'admin'], default: 'user' },
}, { timestamps: true });

export default mongoose.model('User', userSchema);
 









































// import mongoose from 'mongoose';

// const sellerRequestSchema = new mongoose.Schema({
//   user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
//   selectedPackage: { type: mongoose.Schema.Types.ObjectId, ref: 'Package', required: true },
//   paymentStatus: { type: String, enum: ['pending', 'completed'], default: 'pending' },
//   approved: { type: Boolean, default: false }
// }, { timestamps: true });

// export default mongoose.model('SellerRequest', sellerRequestSchema);
