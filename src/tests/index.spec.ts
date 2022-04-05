import supertest from 'supertest';
import app from '../index';

const req = supertest(app);

describe('Test endpoint response', () => {
  it('test hello world endpoint', async () => {
    const res = await req.get('/');
    expect(res.status).toBe(200);
  });
});
