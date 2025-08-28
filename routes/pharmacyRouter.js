const express = require("express");
const router = express.Router();
const pharmacyController = require("../Controllers/pharmacyController");
router.post("/", pharmacyController.addPharmacy);
router.put("/:id", pharmacyController.updatePharmacy);
router.get("/", pharmacyController.listPharmacies);

module.exports = router;
