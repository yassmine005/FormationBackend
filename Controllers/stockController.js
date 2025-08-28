const Stock = require("../models/stockModel");

exports.updateStock = async (req,res) => {
  try {
    const { id } = req.params;
    const stock = await Stock.findByIdAndUpdate(id, req.body, { new: true });
    res.json({ message: "Stock updated", stock });
  } catch(err){ res.status(500).json({ error: err.message }); }
};

exports.listStockByPharmacy = async (req,res) => {
  try {
    const { pharmacyId } = req.params;
    const stocks = await Stock.find({ pharmacyId }).populate("medicationId");
    res.json(stocks);
  } catch(err){ res.status(500).json({ error: err.message }); }
};
