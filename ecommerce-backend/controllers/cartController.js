const Cart = require('../models/Cart');

const getCart = async (req, res) => {
    const { userId } = req.body;
    try {
        const cart = await Cart.findOne({ userId });
        if (!cart) return res.status(404).json({ message: 'Cart not found' });
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addToCart = async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {
        let cart = await Cart.findOne({ userId });

        if (!cart) {
            cart = await Cart.create({ userId, products: [{ productId, quantity }] });
        } else {
            const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);

            if (productIndex > -1) {
		    cart.products[productIndex].quantity += quantity;
            } else {
                cart.products.push({ productId, quantity });
            }
        }

        await cart.save();
        res.status(200).json(cart);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const removeFromCart = async (req, res) => {
    const { userId, productId } = req.body;

    try {
        let cart = await Cart.findOne({ userId });

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        const productIndex = cart.products.findIndex(p => p.productId.toString() === productId);

        if (productIndex > -1) {
            cart.products.splice(productIndex, 1);
            await cart.save();
            return res.status(200).json(cart);
        } else {
            return res.status(404).json({ message: 'Product not found in cart' });
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getCart,
    addToCart,
    removeFromCart,
};

