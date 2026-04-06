const express = require("express");
const sequelize = require("./config/database");
const cors = require("cors"); // tambah ini

// import models
const User = require("./models/user");
const Reminder = require("./models/reminder");
const NotificationHistory = require("./models/notificationHistory");
const userRoutes = require("./routes/userRoutes");
const historyRoutes = require("./routes/historyRoutes");
const reminderRoutes = require("./routes/reminderRoutes");

const app = express();
const port = 3000;

// middleware
app.use(cors());       // <- biar frontend beda port bisa request
app.use(express.json());

//route
app.use("/api/users", userRoutes);

//history
app.use("/api/history", historyRoutes);

//reminder
app.use("/api/reminder", reminderRoutes);

// route test
app.get("/", (req, res) => {
  res.send("Server Node.js + Sequelize siap digunakan!");
});

// start server
const startServer = async () => {
  try {

    // cek koneksi database
    await sequelize.authenticate();
    console.log("✅ Koneksi database berhasil!");

    // sync models ke database
    await sequelize.sync();
    console.log("📦 Database berhasil disinkronkan!");

    // jalankan server
    app.listen(port, () => {
      console.log(`🚀 Server berjalan di http://localhost:${port}`);
    });

  } catch (error) {
    console.error("❌ Gagal koneksi database:", error);
  }
};

startServer();