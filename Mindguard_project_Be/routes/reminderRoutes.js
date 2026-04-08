const express = require("express");
const router = express.Router();

const reminderController = require("../controllers/reminderController");

// ambil reminder
router.get("/", reminderController.getReminders);

// tambah reminder
router.post("/", reminderController.createReminder);

module.exports = router;