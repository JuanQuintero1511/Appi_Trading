// tests/prices.test.js
const request = require('supertest');
const app = require('../src/app');

describe('Prices API', () => {
  test('GET /api/prices should return sample data', async () => {
    const res = await request(app).get('/api/prices');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('data');
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  test('GET /api/prices/:symbol should return a symbol object', async () => {
    const res = await request(app).get('/api/prices/AAPL');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('symbol', 'AAPL');
    expect(res.body).toHaveProperty('price');
  });
});

