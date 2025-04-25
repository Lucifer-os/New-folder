const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');

router.get('/:userId', cartController.getCart);
router.post('/:userId/add', cartController.addToCart);
router.post('/:userId/remove', cartController.removeFromCart);

module.exports = router;
