'use strict';
module.exports = (sequelize, DataTypes) => {
  const invitations = sequelize.define('invitations', {
    inviteCode: DataTypes.STRING,
    inviteeEmail: DataTypes.STRING,
    sentAt: DataTypes.DATE,
    acceptedAt: DataTypes.DATE,
    status: DataTypes.ENUM(["pending", "accepted", "declined", "expired"])
  }, {});
  invitations.associate = function(models) {
    // associations can be defined here
    invitations.belongsTo(models.wallets);
    invitations.belongsTo(models.users, { foreignKey: "inviterId" });
  };
  return invitations;
};