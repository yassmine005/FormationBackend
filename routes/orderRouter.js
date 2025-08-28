var express = require("express");
var router = express.Router();

const orderController = require("../Controllers/orderController");

// ✅ Créer une commande
router.post("/create", orderController.createOrder);

// ✅ Récupérer toutes les commandes
router.get("/", orderController.getOrders);

// ✅ Mettre à jour une commande
router.put("/:id", orderController.updateOrder);

// ✅ Supprimer une commande
router.delete("/:id", orderController.deleteOrder);

module.exports = router;
