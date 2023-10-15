const Product = require('../models/product.models');

const findByName = async (req, res) => {
  const name = req.params.name;
  try {
    const products = await Product.find({ name: { $regex: name, $options: 'i' } });
    if(products.length === 0)
    {
       res.status(404).json({error: "No search found"})
    }
    else{
    res.json(products);
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const readById = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);
    res.json(products);
  } catch (error) {
    res.status(400).json({ error: 'Product not found' });
  }
};


const readAll = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const create = async (req, res) => {
  const products = new Product(req.body);
  try {
    const addProducts = await products.save();
    res.status(201).json(addProducts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removeById = async (req, res) => {
  try {
    await Product.findByIdAndRemove(req.params.id);
    res.json({ message: 'Product removed' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const updateById = async (req, res) => {
  try {
    const update = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(update);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removeAll = async (req, res) => {
  try {
    await Product.deleteMany({});
    res.json({ message: 'All Product removed' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


module.exports = {readAll, readById, create, updateById, removeById, removeAll, findByName };