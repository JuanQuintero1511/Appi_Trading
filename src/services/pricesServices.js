// src/services/pricesService.js
function getPrice(symbol = 'AAPL') {
  const basePrice = 100 + (symbol.charCodeAt(0) % 50); // base simple por símbolo
  const variation = (Math.random() - 0.5) * 4; // +-2
  const price = (basePrice + variation).toFixed(2);
  return {
    symbol: symbol.toUpperCase(),
    price,
    timestamp: new Date().toISOString()
  };
}

function getSamplePrices() {
  const symbols = ['AAPL', 'TSLA', 'MSFT', 'GOOG'];
  return symbols.map(s => getPrice(s));
}

module.exports = { getPrice, getSamplePrices };
