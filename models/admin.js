'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    resetPass(password) {
      return this.update({ password });
    }
    static createAdmin({ Firstname, Lastname, Email, password }) {
      return this.create({Firstname, Lastname, Email, password,
      });
    }
    static associate(models) {
      Admin.hasMany(models.election, {foreignKey: "adminID",});
    }
  }
  Admin.init({
    Firstname: DataTypes.STRING,
    Lastname: DataTypes.STRING,
    Email:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};