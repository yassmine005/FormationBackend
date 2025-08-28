const Order = require("../models/orderModel");

// ✅ Créer une commande
module.exports.createOrder = async (req, res) => {
  try {
    const { product, quantity } = req.body;

    if (!product || !quantity) {
      return res.status(400).json({ message: "Product et quantity sont obligatoires" });
    }

    const newOrder = new Order({ product, quantity });
    await newOrder.save();

    res.status(201).json({
      message: "Commande créée avec succès",
      order: newOrder
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Récupérer toutes les commandes
module.exports.getOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({ createdAt: -1 });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Mettre à jour une commande
module.exports.updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedOrder = await Order.findByIdAndUpdate(id, req.body, { new: true });

    if (!updatedOrder) {
      return res.status(404).json({ message: "Commande introuvable" });
    }

    res.status(200).json(updatedOrder);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Supprimer une commande
module.exports.deleteOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedOrder = await Order.findByIdAndDelete(id);

    if (!deletedOrder) {
      return res.status(404).json({ message: "Commande introuvable" });
    }

    res.status(200).json({ message: "Commande supprimée avec succès" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
