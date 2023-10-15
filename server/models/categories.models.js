const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: String,
});

const categories = mongoose.model('Categories', schema);

module.exports = categories;
