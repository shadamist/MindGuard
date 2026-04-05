const User = require("../models/user");

// REGISTER USER
exports.register = async (req, res) => {
  try {

    const { username, email, password } = req.body;

    const newUser = await User.create({
      username,
      email,
      password
    });

    res.json({
      message: "User berhasil dibuat",
      data: newUser
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};


// LOGIN USER
exports.login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email, password }
    });

    if (!user) {
      return res.status(401).json({
        message: "Email atau password salah"
      });
    }

    res.json({
      message: "Login berhasil",
      data: user
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};