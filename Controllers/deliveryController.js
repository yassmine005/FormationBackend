const Delivery = require("../models/deliveryModel");

exports.createDelivery = async (req,res) => {
  try {
    const delivery = await Delivery.create(req.body);
    res.status(201).json({ message: "Delivery scheduled", delivery });
  } catch(err){ res.status(500).json({ error: err.message }); }
};

exports.updateDeliveryStatus = async (req,res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const delivery = await Delivery.findByIdAndUpdate(id, { status }, { new: true });
    res.json({ message: "Delivery status updated", delivery });
  } catch(err){ res.status(500).json({ error: err.message }); }
};

exports.getDeliveryByOrder = async (req,res) => {
  try {
    const { orderId } = req.params;
    const delivery = await Delivery.findOne({ orderId });
    res.json(delivery);
  } catch(err){ res.status(500).json({ error: err.message }); }
};
