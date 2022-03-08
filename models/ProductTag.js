const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    product_id: { 
      type: DATATypes.INT,
      allowNull: false,
      },
    tag_id: { 
        type: DATATypes.INT, 
        allowNull: false,
      },
    stock: { 
        type: DATATypes.INTEGER, 
        allowNull: false,
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
