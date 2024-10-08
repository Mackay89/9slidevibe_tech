const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/ecommerce_db', { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
app.use(bodyParser.json());

// Define the product schema
const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    image_url: String
});

// Create the Product model
const Product = mongoose.model('Product', productSchema);

// Route to add a product
app.post('/api/products', (req, res) => {
    const { name, description, price, image_url } = req.body;
    const newProduct = new Product({ name, description, price, image_url });
    newProduct.save((err, product) => {
        if (err) return res.status(500).send(err);
        return res.status(200).send(product);
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

