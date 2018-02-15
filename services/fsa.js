const axios = require('axios')

const { FSA_URL } = require('../constants')

const FSA = axios.create({
  baseURL: FSA_URL,
  headers: {
    'content-type': 'application/json',
    'x-api-version': 2
  }
})

const getAuthorities = async () => {
  const { data } = await FSA.get('/Authorities')

  return data.authorities
}

const getEstablishments = async (authorityId) => {
  const { data } = await FSA.get(`/Establishments?localAuthorityId=${authorityId}&pageSize=0`)

  return data.establishments
}

module.exports = {
  getAuthorities,
  getEstablishments
}
