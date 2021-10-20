const express = require("express");
const router = express.Router();

const authController = require("../controllers/auth");

/**
 * @desc  Process the registration form
 * @route POST  /auth/register
 */

router.post("/register", authController.register);

/**
 * @desc  Process the login form
 * @route POST  /auth/login
 */

router.post("/login", authController.login);

module.exports = router;
