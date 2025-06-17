import Rent from '../models/Rent.js';
import Item from '../models/Item.js';


export const requestRent = async (req, res) => {
  try {
    const { itemId, startDate, endDate } = req.body;

    // Prevent renting own item
    const item = await Item.findById(itemId);
    if (!item || item.owner.toString() === req.user._id.toString()) {
      return res.status(400).json({ message: "Invalid item" });
    }

    // Check if date range overlaps any confirmed/approved rentals
    const overlapping = await Rent.findOne({
      item: itemId,
      status: { $in: ['approved', 'confirmed'] },
      $or: [
        { startDate: { $lte: endDate }, endDate: { $gte: startDate } }
      ]
    });

    if (overlapping) {
      return res.status(400).json({ message: "Item not available for selected dates" });
    }

    const rent = await Rent.create({
      item: itemId,
      renter: req.user._id,
      startDate,
      endDate,
      status: "pending"
    });

    res.status(201).json({ message: "Rent request submitted", rent });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



export const getRequests = async (req, res) => {
  try {
    const sellerId = req.user._id;

    // Get all items owned by seller
    const items = await Item.find({ owner: sellerId }).select('_id');

    const itemIds = items.map(item => item._id);

    const requests = await Rent.find({
      item: { $in: itemIds },
      status: 'pending'
    }).populate('item').populate('renter', 'name email');

    res.status(200).json({ requests });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const respondToRentRequest = async (req, res) => {
  try {
    const { rentId } = req.params;
    const { action } = req.body; // "approve" or "reject"
    const sellerId = req.user._id;

    const rent = await Rent.findById(rentId).populate('item');
    if (!rent) return res.status(404).json({ message: "Rent request not found" });

    if (rent.item.owner.toString() !== sellerId.toString()) {
      return res.status(403).json({ message: "You are not the owner of this item" });
    }

    if (rent.status !== 'pending') {
      return res.status(400).json({ message: "This rent request is already processed" });
    }

    if (action === 'approve') {
      rent.status = 'approved';
      await rent.save();

      // Cancel all overlapping 'pending' requests for the same item
      await Rent.updateMany({
        _id: { $ne: rent._id },
        item: rent.item._id,
        status: 'pending',
        $or: [
          { startDate: { $lte: rent.endDate }, endDate: { $gte: rent.startDate } }
        ]
      }, {
        $set: { status: 'cancelled' }
      });

      return res.status(200).json({
        message: "Rent request approved successfully. Conflicting requests were automatically cancelled.",
        rent
      });

    } else if (action === 'reject') {
      rent.status = 'rejected';
      await rent.save();

      return res.status(200).json({
        message: "Rent request rejected. The item remains unavailable for the selected dates.",
        rent
      });
    } else {
      return res.status(400).json({ message: "Invalid action. Use 'approve' or 'reject'." });
    }

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




export const getMyApprovedRents = async (req, res) => {
  try {
    const userId = req.user._id;

    const approvedRents = await Rent.find({
      renter: userId,
      status: 'approved'
    }).populate('item');

    res.status(200).json({ approvedRents });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};




export const getMyItemsRentHistory = async (req, res) => {
  try {
    const sellerId = req.user._id;

    // Find all items owned by this seller
    const items = await Item.find({ owner: sellerId }).select('_id');

    const itemIds = items.map(item => item._id);

    // Find all rent records for those items
    const rentHistory = await Rent.find({ item: { $in: itemIds } })
      .populate('item')
      .populate('renter', 'name email');

    res.status(200).json({ rentHistory });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};






//   export const confirmRent = async (req, res) => {
//     try {
//       const { rentId } = req.params;
  
//       // Find the rent
//       const rent = await Rent.findById(rentId).populate('item');
  
//       if (!rent) {
//         return res.status(404).json({ message: 'Rent not found' });
//       }
  
//       // Check if the logged-in user is the owner of the item
//       if (rent.item.owner.toString() !== req.user._id.toString()) {
//         return res.status(403).json({ message: 'Only the item owner can confirm the rent' });
//       }
  
//       if (rent.status !== 'pending') {
//         return res.status(400).json({ message: 'Rent is already processed' });
//       }
  
//       // Confirm the rent
//       rent.status = 'approved';
//       await rent.save();
  
//       res.status(200).json({ message: 'Rent approved successfully', rent });
//     } catch (error) {
//       res.status(500).json({ message: 'Failed to confirm rent', error: error.message });
//     }
//   };


// export const completeRent = async (req, res) => {
//   const { rentId } = req.params;

//   const rent = await Rent.findById(rentId).populate('item');
//   if (!rent || rent.item.owner.toString() !== req.user._id.toString()) {
//     return res.status(403).json({ message: 'Unauthorized' });
//   }

//   rent.status = 'completed';
//   rent.item.available = true;
//   await rent.item.save();
//   await rent.save();

//   res.json({ message: 'Rental completed', rent });
// };


export const getUnavailableDates = async (req, res) => {
  const { itemId } = req.params;

  const rents = await Rent.find({
    item: itemId,
    status: { $in: ['approved', 'confirmed'] }
  });

  const unavailableDates = rents.map(r => ({
    start: r.startDate,
    end: r.endDate
  }));

  res.json({ unavailableDates });
};
