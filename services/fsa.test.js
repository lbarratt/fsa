const nock = require('nock')

const { getAuthorities, getEstablishments } = require('./fsa')
const { FSA_URL } = require('../constants')

const authorities = require('../test/authorities.json')
const establishments = require('../test/establishments.json')

test('getAuthorities calls /Authorities returning deserialized data', async () => {
  nock(FSA_URL)
    .get('/Authorities')
    .reply(200, authorities)

  const response = await getAuthorities()

  expect(response.length).toBe(2)
  expect(response[0].LocalAuthorityId).toBe(1)
  expect(response[0].Name).toBe('The Good Place')
})

test('getEstablishments calls /Establishments returning deserialized data', async () => {
  nock(FSA_URL)
    .get('/Establishments')
    .query({ localAuthorityId: 2, pageSize: 0 })
    .reply(200, establishments)

  const response = await getEstablishments(2)

  expect(response.length).toBe(4)
  expect(response[0].RatingValue).toBe(5)
})
