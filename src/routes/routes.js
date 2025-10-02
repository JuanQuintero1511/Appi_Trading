const express = require("express");
const router = express.Router();
const { getPrice } = require("../services/pricesService");

// GET /api/prices/:symbol
router.get("/:symbol", (req, res) => {
  const { symbol } = req.params;
  const price = getPrice(symbol);
  res.json({ symbol, price, timestamp: new Date() });
});

module.exports = router;
