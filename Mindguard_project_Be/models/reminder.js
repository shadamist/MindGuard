const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Reminder = sequelize.define("reminders", {
  reminder_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  user_id: {
    type: DataTypes.INTEGER,
  },

  reminder_type: {
    type: DataTypes.STRING,
  },

  reminder_time: {
    type: DataTypes.TIME,
  },

  status: {
    type: DataTypes.STRING,
  },

  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Reminder;