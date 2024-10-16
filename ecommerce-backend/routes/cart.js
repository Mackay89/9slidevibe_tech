const express = require('express');
const { getCart, addToCart, removeFromCart } = require('../controllers/cartController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/', authMiddleware, getCart);
router.post('/add', authMiddleware, addToCart);
router.delete('/remove', authMiddleware, removeFromCart);

module.exports = router;

