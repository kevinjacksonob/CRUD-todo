const {Sequelize} = require("sequelize");

const db = new Sequelize ({
  database:"todo",
  port: 5432,
  host: "localhost",
  username: "postgres",
  password: "0909",
  dialect: "postgres",
});

module.exports = db;