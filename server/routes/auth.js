const express = require("express");
const auth = require("../controllers/auth");
const router = express.Router();

const authController = require("../controllers/auth");

router.post("/register", authController.register);
router.post("/login", authController.register);

module.exports = router;
