const express = require('express');
const cartRoutes = require('./routes/cart');
const cors = require('cors'); // For handling cross-origin requests

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // To handle JSON payloads
app.use(cors()); // To handle cross-origin requests

// Routes
app.use('/cart', cartRoutes);

// Error handling for undefined routes
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

// Generic error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

