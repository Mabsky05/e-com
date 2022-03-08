// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'id',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'id',
});

// Products belongToMany Tags (through ProductTag)
Product.belongToMany(Tag, {
  through: 'ProductTag',
  as: 'product_id',
  foreignKey: 'id'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongToMany(Product, {
  through: 'ProductTag',
  as: 'tag_id',
  foreignKey: 'id'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
