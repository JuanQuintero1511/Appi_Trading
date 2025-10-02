// src/routes/prices.js
const express = require('express');
const router = express.Router();
const { getPrice, getSamplePrices } = require('../services/pricesService');

// GET /api/prices -> lista de ejemplo
router.get('/', (req, res) => {
  const data = getSamplePrices();
  res.json({ message: '📈 Trading API running', data });
});

// GET /api/prices/:symbol -> precio actual (simulado)
router.get('/:symbol', (req, res) => {
  const { symbol } = req.params;
  const priceObj = getPrice(symbol);
  res.json(priceObj);
});

module.exports = router;
