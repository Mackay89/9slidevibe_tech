const express = require('express');
const router = express.Router();
const { login } = require('../controllers/authController'); // ensure this is correct

router.post('/login', login); // this should be defined and not undefined

module.exports = router;

