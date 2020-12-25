'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CarPicture extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CarPicture.init({
    picture: DataTypes.STRING,
    part: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CarPicture',
  });
  return CarPicture;
};