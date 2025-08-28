const mongoose = require("mongoose");

const deliverySchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
  type: { type: String, enum: ["pickup","delivery"], required: true },
  address: String,
  deliveryDate: Date,
  status: { type: String, enum: ["pending","in progress","delivered"], default: "pending" }
});

module.exports = mongoose.model("Delivery", deliverySchema);
