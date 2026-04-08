const Reminder = require("../models/reminder");

// ambil semua reminder
exports.getReminders = async (req, res) => {
  try {

    const reminders = await Reminder.findAll();

    res.json(reminders);

  } catch (error) {

    res.status(500).json({
      message: "Gagal mengambil data reminder",
      error: error.message
    });

  }
};

// tambah reminder
exports.createReminder = async (req, res) => {

  try {

    const { user_id, reminder_type, reminder_time, status } = req.body;

    const reminder = await Reminder.create({
      user_id,
      reminder_type,
      reminder_time,
      status
    });

    res.status(201).json(reminder);

  } catch (error) {

    res.status(500).json({
      message: "Gagal membuat reminder",
      error: error.message
    });

  }

};