import Item from '../models/Item.js';

export const listItems = async (req, res) => {
  try {
    const items = await Item.find({ available: true });
    if (!items.length) return res.status(404).json({ message: 'No items found' });
    res.status(200).json(items);
  } catch (err) {
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
