'use strict';
module.exports = (sequelize, DataTypes) => {
  const transactionSigners = sequelize.define('transactionSigners', {
    transactionHash: DataTypes.STRING
  }, {});
  transactionSigners.associate = function(models) {
    // associations can be defined here
    transactionSigners.belongsTo(models.transactions);
    transactionSigners.belongsTo(models.users, { foreignKey: "signedById"});

  };
  return transactionSigners;
};