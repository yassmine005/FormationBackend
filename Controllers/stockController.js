const Stock = require("../models/stockModel");

// ➕ Ajouter un stock
exports.addStock = async (req, res) => {
  try {
    const stock = await Stock.create(req.body);
    res.status(201).json({ message: "Stock added", stock });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📋 Lister tout le stock
exports.listStocks = async (req, res) => {
  try {
    const stocks = await Stock.find().populate("medicationId pharmacyId");
    res.json(stocks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📋 Lister le stock d’une pharmacie
exports.listStockByPharmacy = async (req, res) => {
  try {
    const { pharmacyId } = req.params;
    const stocks = await Stock.find({ pharmacyId }).populate("medicationId");
    res.json(stocks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔎 Obtenir un stock par ID
exports.getStockById = async (req, res) => {
  try {
    const { id } = req.params;
    const stock = await Stock.findById(id).populate("medicationId pharmacyId");
    if (!stock) return res.status(404).json({ message: "Stock not found" });
    res.json(stock);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✏️ Mettre à jour un stock
exports.updateStock = async (req, res) => {
  try {
    const { id } = req.params;
    const stock = await Stock.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ message: "Stock updated", stock });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🗑️ Supprimer un stock
exports.deleteStock = async (req, res) => {
  try {
    const { id } = req.params;
    const stock = await Stock.findByIdAndDelete(id);
    if (!stock) return res.status(404).json({ message: "Stock not found" });
    res.json({ message: "Stock deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
