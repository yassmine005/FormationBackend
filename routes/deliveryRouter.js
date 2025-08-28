const express = require("express");
const router = express.Router();
const deliveryController = require("../Controllers/deliveryController");

router.post("/", deliveryController.createDelivery);
router.put("/:id/status", deliveryController.updateDeliveryStatus);
router.get("/:orderId", deliveryController.getDeliveryByOrder);

module.exports = router;
