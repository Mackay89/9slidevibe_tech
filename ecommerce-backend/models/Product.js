const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String },
    inStock: { type: Boolean, default: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true }, // Add category reference
});

module.exports = mongoose.model('Product', ProductSchema);

