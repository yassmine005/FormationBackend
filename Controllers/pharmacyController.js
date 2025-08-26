const Pharmacy = require("../models/Pharmacy");

exports.addPharmacy = async (req,res) => {
  try {
    const pharmacy = await Pharmacy.create(req.body);
    res.status(201).json({ message: "Pharmacy added", pharmacy });
  } catch(err){ res.status(500).json({ error: err.message }); }
};

exports.updatePharmacy = async (req,res) => {
  try {
    const { id } = req.params;
    const pharmacy = await Pharmacy.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ message: "Pharmacy updated", pharmacy });
  } catch(err){ res.status(500).json({ error: err.message }); }
};

exports.listPharmacies = async (req,res) => {
  try {
    const { regionId } = req.query;
    const pharmacies = regionId ? await Pharmacy.find({ regionId }) : await Pharmacy.find();
    res.json(pharmacies);
  } catch(err){ res.status(500).json({ error: err.message }); }
};
