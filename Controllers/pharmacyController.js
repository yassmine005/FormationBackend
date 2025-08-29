const Pharmacy = require("../models/pharmacyModel");

// ➕ Ajouter une pharmacie
exports.createPharmacy = async (req, res) => {
  try {
    const pharmacy = await Pharmacy.create(req.body);
    res.status(201).json({ message: "Pharmacy created", pharmacy });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 📋 Récupérer toutes les pharmacies
exports.getAllPharmacies = async (req, res) => {
  try {
    const pharmacies = await Pharmacy.find();
    res.json(pharmacies);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔍 Récupérer une seule pharmacie par ID
exports.getPharmacyById = async (req, res) => {
  try {
    const pharmacy = await Pharmacy.findById(req.params.id);
    if (!pharmacy) return res.status(404).json({ error: "Pharmacy not found" });
    res.json(pharmacy);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✏️ Modifier une pharmacie
exports.updatePharmacy = async (req, res) => {
  try {
    const pharmacy = await Pharmacy.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!pharmacy) return res.status(404).json({ error: "Pharmacy not found" });
    res.json({ message: "Pharmacy updated", pharmacy });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ❌ Supprimer une pharmacie
exports.deletePharmacy = async (req, res) => {
  try {
    const pharmacy = await Pharmacy.findByIdAndDelete(req.params.id);
    if (!pharmacy) return res.status(404).json({ error: "Pharmacy not found" });
    res.json({ message: "Pharmacy deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
