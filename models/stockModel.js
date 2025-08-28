const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  medicationId: { type: mongoose.Schema.Types.ObjectId, ref: "Medication", required: true },
  pharmacyId: { type: mongoose.Schema.Types.ObjectId, ref: "Pharmacy", required: true },
  quantity: { type: Number, default: 0 },
  price: Number , });

module.exports = mongoose.model("Stock", stockSchema); 