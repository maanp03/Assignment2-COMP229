const Categories = require('../models/categories.models');

const findByName = async (req, res) => {
  const  name  = req.params.name;
  try {
    const categories = await Categories.find({ name: { $regex: name, $options: 'i' } });
    if(categories.length === 0)
    {
       res.status(404).json({error: "No search found"})
    }
    else{res.json(categories)}
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateById = async (req, res) => {
  try {
    const update = await Categories.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(update);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const readAll = async (req, res) => {
  try {
    const categories = await Categories.find();
    res.json(categories);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const readById = async (req, res) => {
  try {
    const categories = await Categories.findById(req.params.id);
    res.json(categories);
  } catch (error) {
    res.status(400).json({ error: 'Categories not found' });
  }
};

const create = async (req, res) => {
  const { name } = req.body;
  const categories = new Categories({ name });

  try {
    const addCategories = await categories.save();
    res.status(200).json(addCategories);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



const removeById = async (req, res) => {
  try {
    await Categories.findByIdAndRemove(req.params.id);
    res.json({ message: 'Categories removed' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removeAll = async (req, res) => {
  try {
    await Categories.deleteMany({});
    res.json({ message: 'All Categories removed' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};




module.exports = { readAll, create, readById,  updateById, removeById, removeAll, findByName}
