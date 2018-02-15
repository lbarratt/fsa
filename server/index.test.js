const request = require('supertest-koa-agent')
const nock = require('nock')

const app = require('./index')
const cache = require('../services/cache')
const { FSA_URL } = require('../constants')
const authorities = require('../test/authorities.json')

beforeEach(async () => {
  await cache.clear()

  nock(FSA_URL)
    .get('/Authorities')
    .reply(500, authorities);
})

test('GET / responsds with 500 when an error occurs', async () => {
  const res = await request(app).get('/')

  expect(res.status).toBe(500)
})

