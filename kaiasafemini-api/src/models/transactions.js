'use strict';
module.exports = (sequelize, DataTypes) => {
  const transactions = sequelize.define('transactions', {
    transactionDetails: DataTypes.STRING, // split to individual fields
    transactionHash: DataTypes.STRING
  }, {});
  transactions.associate = function(models) {
    // associations can be defined here
    transactions.belongsTo(models.wallets);
    transactions.belongsTo(models.users, { foreignKey: "createdById" });
  };
  return transactions;
};