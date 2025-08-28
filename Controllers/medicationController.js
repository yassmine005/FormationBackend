const Medication = require("../models/medicationModel");

exports.searchMedication = async (req,res) => {
  try {
    const { name, regionId } = req.query;
    const meds = await Medication.find({ name: { $regex: name, $options: "i" } }).populate("pharmacyId");
    res.json(meds);
  } catch(err){ res.status(500).json({ error: err.message }); }
};

exports.addMedication = async (req,res) => {
  try {
    const med = await Medication.create(req.body);
    res.status(201).json({ message: "Medication added", med });
  } catch(err){ res.status(500).json({ error: err.message }); }
};

exports.updateMedication = async (req,res) => {
  try {
    const { id } = req.params;
    const med = await Medication.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ message: "Medication updated", med });
  } catch(err){ res.status(500).json({ error: err.message }); }
};
