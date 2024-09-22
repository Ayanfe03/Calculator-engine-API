const express = require('express');
const router = express.Router();
const { additionHandler, subtractionHandler, multiplicationHandler, divisionHandler } = require('../../controllers/v1/calculatorController');

router.post('/add', additionHandler);
router.post('/subtract', subtractionHandler);
router.post('/multiply', multiplicationHandler);
router.post('/divide', divisionHandler);

module.exports = router;
