var express = require('express');
var router = express.Router();
const os = require("os");

/* GET users listing. 
router.get('/marhba', function(req, res, next) {
  res.json('welcome');
});*/
const osController = require("../Controllers/osController")
// GET OS Information
router.get('/getOsInformation', osController.getOsInformation);
module.exports = router;
