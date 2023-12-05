const account = require("../model/accountModel");
const transection = require("../model/transectionModel");
const sequelize = require("../database/connection")
// record 1
account.create({
  account_number: "01001",
  account_type: "current account",
  account_name: "Muhammad Hamza-DS Emp",
  account_id: "101",
  amount: 50000,
  user_name: "m_hamza",
});
// record 2
account.create({
  account_number: "01002",
  account_type: "current account",
  account_name: "Muhammad Hamza SadaPay",
  account_id: "102",
  amount: 5000,
  user_name: "m_hamza",
});
// record 1
transection.create({
  sender_account_number: "01001",
  receiver_account_number: "01002",
  amount: 1000,
  transection_id: "001",
});
