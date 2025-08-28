const mongoose = require("mongoose");

const medicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  pharmacyId: { type: mongoose.Schema.Types.ObjectId, ref: "Pharmacy", required: true }
});

module.exports = mongoose.model("Medication", medicationSchema);
