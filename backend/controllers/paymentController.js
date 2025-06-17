import Rent from '../models/Rent.js'; 

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
