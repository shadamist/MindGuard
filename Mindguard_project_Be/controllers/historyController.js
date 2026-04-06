const NotificationHistory = require("../models/notificationHistory");

exports.getHistory = async (req, res) => {
  try {

    const history = await NotificationHistory.findAll();

    res.json(history);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};