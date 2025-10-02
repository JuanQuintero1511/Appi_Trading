// src/app.js
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../swagger.json');
const pricesRoutes = require('./routes/prices');

const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/api/prices', pricesRoutes);

// Health-check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

module.exports = app;
