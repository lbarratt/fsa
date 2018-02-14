const request = require('supertest')

const app = require('./index')

test('GET / returns 200 OK', async () => {
  const res = await request(app).get('/')

  expect(res.status).toBe(200)
})
