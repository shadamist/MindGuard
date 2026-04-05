const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const NotificationHistory = sequelize.define("notification_history", {
  history_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  user_id: {
    type: DataTypes.INTEGER,
  },

  reminder_id: {
    type: DataTypes.INTEGER,
  },

  message: {
    type: DataTypes.STRING,
  },

  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = NotificationHistory;