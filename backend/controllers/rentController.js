import Rental from '../models/Rental.js';
import Item from '../models/Item.js';

export const createRental = async (req, res) => {
  try {
    const { itemId, advancePaid, startDate ,endDate} = req.body;

    const item = await Item.findById(itemId);
    if (!item || !item.available) {
      return res.status(400).json({ message: 'Item not available for rent' });
    }

    const rental = await Rental.create({
      item: itemId,
      renter: req.user._id,
      advancePaid,
      startDate,
      endDate,
    });

    // Optionally make item unavailable until returned
    item.available = false;
    await item.save();

    res.status(201).json({ message: 'Rental created', rental });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getMyRentals = async (req, res) => {
  try {
    const rentals = await Rental.find({ renter: req.user._id }).populate('item');
    res.status(200).json(rentals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
