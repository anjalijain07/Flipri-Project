const express = require('express');
const router = express.Router();
const { addClient, getAllClients } = require('../controller/clientController');

router.post('/add', addClient);
router.get('/', getAllClients);
module.exports = router;