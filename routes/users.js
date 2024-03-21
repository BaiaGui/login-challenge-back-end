const express = require("express");
const validateRequest = require("../middlewares/validateRequest");
const usersController = require("../controllers/usersController");
const router = express.Router();
const pool = require("../db/index");
router.get("/", (req, res) => {
  try {
    pool.query("SELECT * FROM users", (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows);
    });
  } catch (e) {
    console.error(e);
  }
  //res.sendStatus(200);
});

router.post("/register", validateRequest, usersController.registerUser);
router.post("/login", validateRequest, usersController.loginUser);

module.exports = router;
