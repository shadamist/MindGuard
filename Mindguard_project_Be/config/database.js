const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("express_backend_mindguard", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;