var express = require("express");
var router = express.Router();
const userController = require("../Controllers/userController");

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.put("/:id", userController.updateUserProfile);

module.exports = router;
