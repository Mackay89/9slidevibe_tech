require('dotenv').config();
const express = require('express');
const connectDB = require('./database/dbConnection');
const productRoutes = require('./routes/productRoutes');
const userRoutes = require('./routes/userRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware to parse incoming requests with JSON payloads
app.use(express.json());

// Route middlewares
app.use('/api/products', productRoutes);   // Routes for product operations
app.use('/api/users', userRoutes);         // Routes for user operations (signup/login)
app.use('/api/orders', orderRoutes);       // Routes for order operations

// Default route for health check
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

