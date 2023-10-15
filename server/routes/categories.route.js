const express = require('express');
const catagoriesController = require('../controllers/categories.controller');

const router = express.Router();


router.route('/search/:name')
  .get( catagoriesController.findByName);

router.route('/')
  .get(catagoriesController.readAll)
  .post(catagoriesController.create)
  .delete(catagoriesController.removeAll);

router.route('/:id')
  .get(catagoriesController.readById)
  .put(catagoriesController.updateById)
  .delete(catagoriesController.removeById);




module.exports = router;





