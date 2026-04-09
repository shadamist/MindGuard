const express = require("express");
const router = express.Router();

const reminderController = require("../controllers/reminderControllers");

router.get("/", reminderController.getReminders);

module.exports = router;