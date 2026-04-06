const Reminder = require("../models/reminder");

exports.getReminders = async (req, res) => {
  try {

    const reminders = await Reminder.findAll();

    res.json(reminders);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};