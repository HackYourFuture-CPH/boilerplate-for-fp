const request = require('supertest');
const app = require('../app');

describe('Errors', () => {
  it('should throw server error', async () => {
    const res = await request(app).get('/wegwegweg');
    expect(res.statusCode).toEqual(500);
  });
});
