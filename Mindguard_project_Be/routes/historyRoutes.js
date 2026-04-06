const express = require("express");
const router = express.Router();

const historyController = require("../controllers/historyControllers");

router.get("/", historyController.getHistory);

module.exports = router;