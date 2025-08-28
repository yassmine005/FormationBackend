const mongoose = require("mongoose");

const notificationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  message: { type: String, required: true },
  date: { type: Date, default: Date.now },
  status: { type: String, enum: ["read","unread"], default: "unread" }
}, { timestamps: true });

module.exports = mongoose.model("Notification", notificationSchema);
