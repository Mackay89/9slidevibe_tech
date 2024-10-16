const Category = require('../models/Category');

// Create Category
exports.createCategory = async (req, res) => {
    const { name, description } = req.body;
    const category = new Category({ name, description });
    await category.save();
    res.status(201).json(category);
};

// Get All Categories
exports.getCategories = async (req, res) => {
    const categories = await Category.find();
    res.json(categories);
};

// Get Category by ID
exports.getCategoryById = async (req, res) => {
    const category = await Category.findById(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category);
};

// Update Category
exports.updateCategory = async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json(category);
};

// Delete Category
exports.deleteCategory = async (req, res) => {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) return res.status(404).json({ message: 'Category not found' });
    res.json({ message: 'Category deleted' });
};

