const router = require('express').Router();
const { Category, Product, ProductTag } = require('../../models');

// The `/api/categories` endpoint
const dirname = '/api/categories';
// const sequelize = require('../config/connection');

// find all categories
// be sure to include its associated Products
router.get('/', async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{model:Product}],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', async (req, res) => {
  try {
    const categoryData = await Category.findOne({
      where: [{id: req.params.id}],
    }); res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// create a new category
router.post('/', async (req, res) => { 
  try {
    const categoryData = await Category.create({...req.body.category_name});
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  Category.update({category_name: req.body.category_name}),
    {where: {id: req.params.id,},
    }
    .then((updatedCategory) => {
      res.json(updatedCategory);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });

});


// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const CategoryData = await CategoryData.destroy({
      where: [{id: req.params.id}],
    });res.status(200).json(categoryData);
    
    if (!CategoryData) {
      res.status(404).json({message: 'Not found'});
      return;
    }
    res.status(200).json(CategoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
