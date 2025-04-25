const Wishlist = require('../models/Wishlist');

exports.getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlist.findOne({ user: req.params.userId }).populate('items');
    if (!wishlist) {
      return res.json({ items: [] });
    }
    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.addToWishlist = async (req, res) => {
  try {
    const { productId } = req.body;
    let wishlist = await Wishlist.findOne({ user: req.params.userId });
    if (!wishlist) {
      wishlist = new Wishlist({ user: req.params.userId, items: [] });
    }
    if (!wishlist.items.includes(productId)) {
      wishlist.items.push(productId);
    }
    await wishlist.save();
    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.removeFromWishlist = async (req, res) => {
  try {
    const { productId } = req.body;
    let wishlist = await Wishlist.findOne({ user: req.params.userId });
    if (!wishlist) {
      return res.status(404).json({ message: 'Wishlist not found' });
    }
    wishlist.items = wishlist.items.filter(item => item.toString() !== productId);
    await wishlist.save();
    res.json(wishlist);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};
