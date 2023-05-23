const express = require("express");

const { signupUser, loginUser } = require("../controllers/userControllers");

const router = express.Router();

router.post("/signup", signupUser);
router.get("/login", loginUser);

module.exports = router;