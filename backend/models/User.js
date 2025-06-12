import mongoose from 'mongoose';

// const userSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   contact: { type: String },
//   address: { type: String },
//   idProof: { type: String }, // file path or URL
//   role: { type: String, enum: ['user', 'seller', 'admin'], default: 'user' },
  
// }, { timestamps: true });

// export default mongoose.model('User', userSchema);





const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  contact: { type: String },
  address: { type: String },
  idProof: { type: String }, // URL or path to file

  role: {
    type: String,
    enum: ['user', 'seller', 'admin'],
    default: 'user',
  },

  // Package the user selected when becoming a seller
  package: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Package',
  },

  // When the user became a seller
  sellerSince: {
    type: Date,
  },

  // Seller-specific profile (optional fields based on package)
  sellerProfile: {
    maxListings: { type: Number, default: 0 }, // based on package
    expiryDate: { type: Date },                // package active until
  }

}, { timestamps: true });

export default mongoose.model('User', userSchema);

