import Rent from '../models/Rent.js';
import Item from '../models/Item.js';

export const createRent = async (req, res) => {
  try {
    const { itemId, advancePaid, startDate, endDate } = req.body;

    const item = await Item.findById(itemId);
    if (!item || !item.available) {
      return res.status(400).json({ message: 'Item not available for rent' });
    }

    // ❌ Prevent seller from renting their own item
    if (item.owner.toString() === req.user._id.toString()) {
      return res.status(403).json({ message: 'You cannot rent your own item' });
    }

    const rental = await Rent.create({
      item: itemId,
      renter: req.user._id,
      advancePaid,
      startDate,
      endDate,
    });

    // Optionally make item unavailable for the rented dates
    item.available = false;
    await item.save();

    res.status(201).json({ message: 'Rental created', rental });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};










export const cancelRent = async (req, res) => {
  try {
    const rentalId = req.params.id;

    const rental = await Rent.findById(rentalId);
    if (!rental) {
      return res.status(404).json({ message: 'Rental not found' });
    }

    // Check if the logged-in user is the one who booked it
    if (rental.renter.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: 'Not authorized to cancel this rental' });
    }

    await Rent.findByIdAndDelete(rentalId);

    res.status(200).json({ message: 'Rental cancelled successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};









export const getMyRentals = async (req, res) => {
  try {
    const rentals = await Rent.find({ renter: req.user._id }).populate('item');
    res.status(200).json(rentals);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
