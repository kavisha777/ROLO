import Rental from '../models/Rental.js';

export const requestRental = async (req, res) => {
  try {
    const { itemId, rentFrom, rentTo } = req.body;

    const rental = new Rental({
      user: req.user.id,
      item: itemId,
      rentFrom,
      rentTo,
      status: 'pending'
    });

    await rental.save();
    res.status(201).json({ message: 'Rental request created', rental });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const viewRentalHistory = async (req, res) => {
  try {
    const history = await Rental.find({ user: req.user.id }).populate('item');
    if (!history.length) return res.status(404).json({ message: 'No history' });
    res.status(200).json(history);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
