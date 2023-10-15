const config = require('./config/config');
const helmet = require('helmet');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const productRoute = require('./server/routes/product.route.js');
const categoriesRoute = require('./server/routes/categories.route.js');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(helmet());

mongoose.connect(config.mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Database error:'));
db.once('open', () => {
  console.log('Connected to Database');

  app.get('/', (req, res) => {
    res.json({ message: 'Welcome to Marketplace Application.' });
  });


  app.use('/api/product', productRoute);
  app.use('/api/categories', categoriesRoute);
  
  app.listen(3000, () => {
    console.log('Server is running at 3000');
  });
});