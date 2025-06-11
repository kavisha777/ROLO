import Item from '../models/Item.js';


export const listItems = async (req, res) => {
  try {
    let items;

    if (req.user.role === 'admin') {
      // Admin sees all items
      items = await Item.find().populate('owner', 'name email role');

    } else if (req.user.role === 'seller') {
      // Seller sees all available items + their own unavailable items
      items = await Item.find({
        $or: [
          { available: true },
          { owner: req.user._id }
        ]
      }).populate('owner', 'name email role');

    } else {
      // Normal user sees only available items
      items = await Item.find({ available: true }).populate('owner', 'name email');
    }

    // If no items found
    if (!items || items.length === 0) {
      return res.status(404).json({ message: 'No items found' });
    }

    // Success
    res.status(200).json(items);

  } catch (err) {
    console.error('Error in listItems:', err);
    res.status(500).json({ message: err.message });
  }
};




export const getItemById = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.status(200).json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};





export const createItem = async (req, res) => {
  try {
    const { name, description, pricePerDay, category, available } = req.body;

    const newItem = new Item({
      name,
      description,
      pricePerDay,
      category,
      available,
      owner: req.user._id  // assuming JWT middleware sets req.user
    });

    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};





export const updateItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) return res.status(404).json({ message: 'Item not found' });

    // Only admin or the seller who owns the item can update
    if (
      req.user.role !== 'admin' &&
      item.owner.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({ message: 'Unauthorized to update this item' });
    }

    // Update item fields
    Object.assign(item, req.body);
    const updatedItem = await item.save();

    res.status(200).json({ message: 'Item updated successfully', item: updatedItem });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};










export const deleteItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);

    if (!item) return res.status(404).json({ message: 'Item not found' });

    // Only admin or the seller who owns the item can delete
    if (
      req.user.role !== 'admin' &&
      item.owner.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({ message: 'Unauthorized to delete this item' });
    }

    await item.deleteOne();
    res.status(200).json({ message: 'Item deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};










export const listMyItems = async (req, res) => {
  try {
    const items = await Item.find({ owner: req.user.id }); // or req.user._id
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

