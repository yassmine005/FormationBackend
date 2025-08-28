const User = require("../models/userModel");

// Enregistrement simple
exports.registerUser = async (req, res) => {
  try {
    const {name, email, password, role, phone, address } = req.body;
    // Création directe de l'utilisateur (mot de passe non hashé)
    const user = await User.create({ name, email, password, role, phone, address });
    res.status(201).json({ message: "User registered", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Login simple
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    // Comparaison simple du mot de passe
    if (user.password !== password) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    res.json({ message: "Login successful", user }); // retourne l'objet utilisateur
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Mise à jour du profil
exports.updateUserProfile = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ message: "Profile updated", updatedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
