const express = require('express');
const { createOrder, getUserOrders, getAllOrders } = require('../controllers/orderController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.post('/', authMiddleware, createOrder);
router.get('/', authMiddleware, getUserOrders);
router.get('/admin', authMiddleware, getAllOrders); // Admin endpoint

module.exports = router;

