// seedPackages.js
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Package from './models/Package.js';

dotenv.config();

await mongoose.connect(process.env.MONGO_URI); // or hardcode if local

const packages = [
  {
    name: "Basic",
    price: 500,
    duration: 30,
    itemLimit: 5,
    imageLimitPerItem: 1,
    isFeatured: false,
    support: "Email support only"
  },
  {
    name: "Standard",
    price: 1000,
    duration: 30,
    itemLimit: 15,
    imageLimitPerItem: 3,
    isFeatured: true,
    support: "Email + Chat support"
  },
  {
    name: "Premium",
    price: 2000,
    duration: 30,
    itemLimit: 30,
    imageLimitPerItem: 5,
    isFeatured: true,
    support: "Priority Support"
  }
];

try {
  await Package.deleteMany(); // Optional: clears old data
  await Package.insertMany(packages);
  console.log("✅ Packages seeded to MongoDB!");
} catch (error) {
  console.error("❌ Failed to seed packages:", error);
} finally {
  mongoose.connection.close();
}
