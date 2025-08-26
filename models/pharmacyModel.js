const mongoose = require("mongoose");

const pharmacySchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: String,
  phone: String,
  openingHours: String,
  regionId: { type: mongoose.Schema.Types.ObjectId, ref: "Region" }
}, { timestamps: true });

module.exports = mongoose.model("Pharmacy", pharmacySchema);
