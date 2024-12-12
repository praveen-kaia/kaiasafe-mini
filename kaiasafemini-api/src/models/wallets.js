'use strict';
module.exports = (sequelize, DataTypes) => {
  const wallets = sequelize.define('wallets', {
    name: DataTypes.STRING, // encrypted
    address: DataTypes.STRING,
    status: DataTypes.ENUM(["draft", "waitingForApproval", "created"])
  }, {});
  wallets.associate = function(models) {
    // associations can be defined here
    wallets.belongsTo(models.users, { foreignKey: 'createdById'});
    wallets.hasMany(models.walletSigners)
  };
  return wallets;
};