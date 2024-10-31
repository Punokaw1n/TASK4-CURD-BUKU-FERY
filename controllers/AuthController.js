// controllers/AuthController.js
import User from "../models/UserModel.js";
import bcrypt from "bcrypt";

// Fungsi untuk mendaftarkan pengguna baru

export const register = async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10); // Mengenkripsi password

  try {
    const newUser = await User.create({ username, password: hashedPassword });
    return res.status(201).json({
      message: "User registered successfully",
      data: newUser,
    });
  } catch (error) {
    return res.status(400).json({
      message: "Registration failed",
      error: error.message,
    });
  }
};

// Login
export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      console.log("Username tidak ditemukan:", username);
      return res
        .status(401)
        .json({ message: "Username yang anda masukan salah" });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      console.log("Password tidak valid untuk user:", username);
      return res
        .status(401)
        .json({ message: "Password yang anda masukan salah" });
    }

    req.session.userId = user._id;
    console.log("Sesi disimpan:", req.session);
    return res.status(200).json({ message: "Login successful" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};

// Logout
export const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ message: "Logout failed" });
    res.clearCookie("connect.sid");
    return res.status(200).json({ message: "Logout successful" });
  });
};
