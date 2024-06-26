'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class sleeptimes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sleeptimes.init({
    time: DataTypes.NUMBER,
    date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'sleeptimes',
  });
  return sleeptimes;
};