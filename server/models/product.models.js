const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  quantity: Number,
  category: String,
}, { collection: 'product' });

const product = mongoose.model('Product', schema);

module.exports = product;
