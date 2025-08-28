const express = require("express");
const router = express.Router();
const medicationController = require("../Controllers/medicationController");
router.get("/search", medicationController.searchMedication);
router.post("/", medicationController.addMedication);
router.put("/:id", medicationController.updateMedication);

module.exports = router;
