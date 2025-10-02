// src/server.js
const http = require('http');
const WebSocket = require('ws');
const app = require('./app');

const PORT = process.env.PORT || 4000;

const server = http.createServer(app);

const wss = new WebSocket.Server({ server });

wss.on('connection', (ws) => {
  console.log('✅ New WebSocket client connected');

  const sendPrice = () => {
    const data = {
      symbol: "AAPL",
      price: (150 + Math.random() * 10).toFixed(2),
      timestamp: new Date().toISOString()
    };
    if (ws.readyState === ws.OPEN) ws.send(JSON.stringify(data));
  };

  // Envia cada 3s
  const interval = setInterval(sendPrice, 3000);

  ws.on('close', () => {
    clearInterval(interval);
    console.log('❌ WebSocket client disconnected');
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📖 Swagger docs available at http://localhost:${PORT}/api-docs`);
});
