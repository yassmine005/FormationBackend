const express = require("express");
const router = express.Router();
const regionController = require("../controllers/regionController");

// ➕ Ajouter
router.post("/", regionController.addRegion);

// ✏️ Modifier
router.put("/:id", regionController.updateRegion);

// 📋 Lister
router.get("/", regionController.listRegions);

// 🔎 Obtenir par ID
router.get("/:id", regionController.getRegionById);

// 🗑️ Supprimer
router.delete("/:id", regionController.deleteRegion);

module.exports = router;
