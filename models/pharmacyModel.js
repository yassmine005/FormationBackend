const mongoose = require("mongoose");

const pharmacySchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  openingHours: { type: String },
  region: { type: String } // plus besoin d’une référence à Region
}, { timestamps: true });

module.exports = mongoose.model("Pharmacy", pharmacySchema);
