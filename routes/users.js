const express = require("express");
const validateRequest = require("../middlewares/validateRequest");
const usersController = require("../controllers/usersController");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendStatus(200);
});

router.post("/register", validateRequest, usersController.registerUser);
router.post("/login", validateRequest, usersController.loginUser);

module.exports = router;
