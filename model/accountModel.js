const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");
// relationship, therefore require the transection model

const transectionModel = require("./transectionModel");

// defining schema

const accountModel = sequelize.define("Account", {
  account_number: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  account_type: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  account_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  account_id: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
});

accountModel.hasMany(transectionModel, {foreignKey: "sender_account_number", as: sentTransection});
accountModel.hasMany(transectionModel, {foreignKey: "receiver_account_number", as: receiverTransection});

module.exports = accountModel;
