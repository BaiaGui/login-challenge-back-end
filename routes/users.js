const express = require('express');
const validateRequest = require('../middlewares/validateRequest');
const usersController = require('../controllers/usersController');

const router = express.Router()


router.get('/', (req, res) => {
    res.sendStatus(200);
})
router.get('/register', validateRequest, usersController.registerUser)
router.get('/login', validateRequest, usersController.loginUser)

module.exports = router;