// paymentController.js



export const handlePaymentSuccess = async (req, res) => {
    const { rentId, paymentDetails } = req.body;
  
    try {
      // ✅ 1. Update rent status to 'confirmed'
      const rent = await Rent.findById(rentId);
      if (!rent) return res.status(404).json({ message: 'Rent not found' });
  
      rent.status = 'confirmed';
  
      // ✅ 2. (Optional) Save paymentDetails if needed
      rent.paymentDetails = paymentDetails;
  
      await rent.save();
  
      res.status(200).json({ message: 'Payment successful, rent confirmed', rent });
    } catch (err) {
      res.status(500).json({ message: 'Payment failed', error: err.message });
    }
  };
  