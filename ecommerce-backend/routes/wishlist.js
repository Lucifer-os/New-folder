const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlistController');

router.get('/:userId', wishlistController.getWishlist);
router.post('/:userId/add', wishlistController.addToWishlist);
router.post('/:userId/remove', wishlistController.removeFromWishlist);

module.exports = router;
