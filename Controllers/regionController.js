const Region = require("../models/regionModel");

// ➕ Ajouter une région
exports.addRegion = async (req, res) => {
  try {
    const region = await Region.create(req.body);
    res.status(201).json({ message: "Region added", region });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✏️ Mettre à jour une région
exports.updateRegion = async (req, res) => {
  try {
    const { id } = req.params;
    const region = await Region.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ message: "Region updated", region });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📋 Lister toutes les régions
exports.listRegions = async (req, res) => {
  try {
    const regions = await Region.find().sort({ name: 1 });
    res.json(regions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔎 Obtenir une région par ID
exports.getRegionById = async (req, res) => {
  try {
    const { id } = req.params;
    const region = await Region.findById(id);
    if (!region) return res.status(404).json({ message: "Region not found" });
    res.json(region);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🗑️ Supprimer une région
exports.deleteRegion = async (req, res) => {
  try {
    const { id } = req.params;
    const region = await Region.findByIdAndDelete(id);
    if (!region) return res.status(404).json({ message: "Region not found" });
    res.json({ message: "Region deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
