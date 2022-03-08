// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    product_name: { 
      type: DATATypes.STRING,
      allowNull: false,
      },
    price: { 
        type: DATATypes.DECIMAL, //VALIDATE AND LIMIT (5,2)
        allowNull: false,
      },
    stock: { 
        type: DATATypes.INTEGER, //VALIDATE AND DEFAULT 10 
        allowNull: false,
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
