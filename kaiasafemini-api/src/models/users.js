'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING, // autofill from email if present
    email: DataTypes.STRING, // encrypted
    address: DataTypes.STRING,
    publicAddress: DataTypes.STRING,
    isActive: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false}
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};