import Rent from '../models/Rent.js'; 
import User from '../models/User.js';
import Package from '../models/Package.js';
import Payment from '../models/Payment.js';

export const handlePackagePayment = async (req, res) => {
  try {
    const userId = req.user._id; // Get user from JWT
    const { packageId } = req.body;

    const selectedPackage = await Package.findById(packageId);
    if (!selectedPackage) {
      return res.status(404).json({ message: 'Package not found' });
    }

    // Create payment record
    const payment = await Payment.create({
      user: userId,
      amount: selectedPackage.price,
      status: 'completed',
      package: packageId
    });

    // Promote user to seller
    const user = await User.findByIdAndUpdate(userId, { role: 'seller' }, { new: true });

    res.status(200).json({
      message: 'Payment successful. User upgraded to seller.',
      user,
      payment
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};











export const handlePaymentSuccess = async (req, res) => {
  const { rentId, paymentDetails } = req.body;

  try {
    const rent = await Rent.findById(rentId);
    if (!rent) return res.status(404).json({ message: 'Rent not found' });

    // Optional: Check if already confirmed
    if (rent.status === 'confirmed') {
      return res.status(400).json({ message: 'Rent already confirmed' });
    }

    // ✅ Update status
    rent.status = 'confirmed';

    // ✅ Save payment details
    rent.paymentDetails = paymentDetails;

    await rent.save();

    res.status(200).json({ message: 'Payment successful, rent confirmed', rent });
  } catch (err) {
    res.status(500).json({ message: 'Payment failed', error: err.message });
  }
};
