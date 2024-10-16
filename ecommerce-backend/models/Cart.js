const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true
      },
      quantity: {
        type: Number,
        required: true,
        min: 1
      }
    }
  ],
  totalPrice: {
    type: Number,
    required: true
  }
});

const Cart = mongoose.model('Cart', cartSchema);
module.exports = Cart;

