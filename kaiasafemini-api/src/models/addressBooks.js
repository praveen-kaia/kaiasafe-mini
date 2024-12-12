'use strict';

const { GetObjectTorrentOutputFilterSensitiveLog } = require("@aws-sdk/client-s3");

module.exports = (sequelize, DataTypes) => {
  // entire address book fields is encrypted
  const addressBooks = sequelize.define('addressBooks', {
    name: DataTypes.STRING,
  });
  addressBooks.associate = function(models) {
    // associations can be defined here
    addressBooks.belongsTo(models.users);
  };
  return addressBooks;
};