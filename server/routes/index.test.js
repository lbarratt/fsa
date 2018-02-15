const request = require('supertest-koa-agent')
const nock = require('nock')
const cheerio = require('cheerio')

const app = require('../index')
const { FSA_URL } = require('../../constants')
const authorities = require('../../test/authorities.json')
const establishments = require('../../test/establishments.json')

beforeEach(() => {
  nock(FSA_URL)
    .get('/Authorities')
    .reply(200, authorities)

  nock(FSA_URL)
    .get('/Establishments')
    .query({ localAuthorityId: 1, pageSize: 0 })
    .reply(200, establishments)
})

test('GET / responds 200 OK as HTML', async () => {
  const res = await request(app).get('/')

  expect(res.status).toBe(200)
  expect(res.headers['content-type']).toContain('text/html')
})

test('GET / displays a <select> element displaying available authorities', async () => {
  const res = await request(app).get('/')
  const page = cheerio.load(res.text)
  const select = page('select[name=authorityId]')

  expect(select.text()).toContain('The Good Place')
  expect(select.text()).toContain('The Bad Place')
})

test('GET /?authorityId=2 displays establishment rating results for the selected authority', async () => {
  const res = await request(app).get('/?authorityId=1')
  const page = cheerio.load(res.text)
  const selectedOption = page('option[selected]')
  const ratings = page('.c-ratings tbody')

  expect(selectedOption.text()).toContain('The Good Place')
  expect(ratings.text()).toContain('Exempt')
  expect(ratings.text()).toContain('50.00%')
})
