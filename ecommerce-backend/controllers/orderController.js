const Order = require('../models/Order');

// Create Order
exports.createOrder = async (req, res) => {
    const { userId, products, totalAmount } = req.body;
    const order = new Order({ user: userId, products, totalAmount });
    await order.save();
    res.status(201).json(order);
};

// Get User Orders
exports.getUserOrders = async (req, res) => {
    const orders = await Order.find({ user: req.user.id }).populate('products.product');
    res.json(orders);
};

// Get All Orders
exports.getAllOrders = async (req, res) => {
    const orders = await Order.find().populate('user', 'name email').populate('products.product');
    res.json(orders);
};

