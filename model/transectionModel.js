const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

// define relationship between account and transection models
const Accountmodel = require("./accountModel");
const transectionModel = sequelize.define("Transection", {
  sender_account_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  receiver_account_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  amount: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  transection_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
});

// define the association now
transectionModel.belongsTo(Accountmodel, {
  foreignKey: "sender_account_number",
  as: senderAccount,
});
transectionModel.belongsTo(Accountmodel, {
  foreignKey: "receiver_account_number",
  as: receiverAccount,
});

module.exports = transectionModel;
