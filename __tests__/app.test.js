const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('charts routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/cats should return a list of charts', async () => {
    const res = await request(app).get('/charts');
    expect(res.body.length).toEqual(7);
    expect(res.body[6]).toEqual({
      id: '7',
      name: 'Kashi',
    });
  });

  it('/charts/:id should return chart detail', async () => {
    const res = await request(app).get('/charts/1');
    const kat = {
      id: '1',
      name: 'Kat',
      age: 28,
      birthday: 'July 7, 1994',
      sun: 'Cancer',
      moon: 'Cancer',
      rising: 'Leo',
      venus: 'Leo',
    };
    expect(res.body).toEqual(kat);
  });

  afterAll(() => {
    pool.end();
  });
});
