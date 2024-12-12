'use strict';
module.exports = (sequelize, DataTypes) => {
  const walletSigners = sequelize.define('walletSigners', {
  }, {});
  walletSigners.associate = function(models) {
    // associations can be defined here
    walletSigners.belongsTo(models.wallets);
    walletSigners.belongsTo(models.users);
  };
  return walletSigners;
};