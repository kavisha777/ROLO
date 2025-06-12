import Rent from '../models/Rent.js';
import Item from '../models/Item.js';

export const createRent = async (req, res) => {
  try {
    if (req.user.role === 'admin') {
      return res.status(403).json({ message: 'Admins cannot rent items' });
    }

    const { itemId, advancePaid, startDate, endDate } = req.body;

    const item = await Item.findById(itemId);
    if (!item || !item.available) {
      return res.status(400).json({ message: 'Item not available for rent' });
    }

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

    item.available = false;
    await item.save();

    res.status(201).json({ message: 'Rental created', rental });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};










export const confirmRent = async (req, res) => {
  try {
    const rentId = req.params.id;

    const rent = await Rent.findById(rentId);
    if (!rent) {
      return res.status(404).json({ message: 'Rent not found' });
    }

    rent.status = 'confirmed';
    await rent.save();

    res.status(200).json({ message: 'Rent confirmed successfully', rent });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};









export const cancelRent = async (req, res) => {
  try {
    const rental = await Rent.findById(req.params.id);

    if (!rental) {
      return res.status(404).json({ message: 'Rental not found' });
    }

    // Check if the logged-in user is the renter or admin
    if (rental.renter.toString() !== req.user._id.toString() && req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Not authorized to cancel this rental' });
    }

    // Make item available again
    const item = await Item.findById(rental.item);
    if (item) {
      item.available = true;
      await item.save();
    }

    // Delete or mark the rental as cancelled
    await rental.deleteOne();

    res.status(200).json({ message: 'Rental cancelled and item is now available' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};















export const getMyRents = async (req, res) => {
  try {
    const rents = await Rent.find({ renter: req.user._id })
      .populate('item')  // populate item details if needed
      .exec();

    res.status(200).json({ rents });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};






export const getSellerItemRents = async (req, res) => {
  try {
    if (req.user.role !== 'seller') {
      return res.status(403).json({ message: 'Only sellers can access this' });
    }

    // Find rents where the item's owner is the logged-in seller
    const rents = await Rent.find()
      .populate({
        path: 'item',
        match: { owner: req.user._id }
      })
      .exec();

    // Filter out rents with no matching item (because of the match)
    const filteredRents = rents.filter(rent => rent.item !== null);

    res.status(200).json({ rents: filteredRents });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};





export const getAllRents = async (req, res) => {
  try {
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Admins only' });
    }

    const rents = await Rent.find()
      .populate('item')
      .populate('renter', 'name email') // optionally include renter info
      .exec();

    res.status(200).json({ rents });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

