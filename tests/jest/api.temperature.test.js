const supertest = require('supertest');

const { server, url } = require('../../backend/server');

const request = supertest(url);

describe('temperature api', () => {
  it('missing route should return 404', async () => {
    await server;
    await request.get('/api/aaaa').expect(404);
  });
});