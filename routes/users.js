const express = require("express");
const router = express.Router();

const validateRequest = require("../middlewares/validateRequest");
const usersController = require("../controllers/usersController");

router.get("/", (req, res) => {
  res.sendStatus(200);
});

router.post(
  "/register",
  validateRequest.registerValidation,
  usersController.registerUser
);
router.post(
  "/login",
  validateRequest.loginValidation,
  usersController.loginUser
);

module.exports = router;
