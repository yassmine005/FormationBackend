const express = require("express");
const router = express.Router();
const stockController = require("../controllers/stockController");

// ➕ Ajouter un stock
router.post("/", stockController.addStock);

// 📋 Lister tous les stocks
router.get("/", stockController.listStocks);

// 📋 Lister le stock d’une pharmacie
router.get("/pharmacy/:pharmacyId", stockController.listStockByPharmacy);

// 🔎 Obtenir un stock par ID
router.get("/:id", stockController.getStockById);

// ✏️ Mettre à jour un stock
router.put("/:id", stockController.updateStock);

// 🗑️ Supprimer un stock
router.delete("/:id", stockController.deleteStock);

module.exports = router;