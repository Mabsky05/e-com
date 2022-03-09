const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
// be sure to include its associated Products
router.get('/', (req, res) => {
  try {
    const categoryData = await Category.findAll({
      include: [{ model:Product}],
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// find one category by its `id` value
// be sure to include its associated Products
router.get('/:id', (req, res) => {
  try {
    const categoryData = await Category.findbyPk(req.params.id, {
      include: [{model:Product}],
    }); res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }

});

// create a new category
router.post('/', (req, res) => { 
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }

});

// update a category by its `id` value
router.put('/:id', (req, res) => {
  
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
  try {
    const CategoryData = await CategoryData(destroy)({
      where: {
        id: req.params.id,
      },
    });
    if (!CategoryData) {
      res.status(404).json({message: 'No library card found with that id!'});
      return;
    }
    res.status(200).json(libraryCardData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
