const axios = require('axios')

const FSA = axios.create({
  baseURL: 'http://api.ratings.food.gov.uk',
  headers: {
    'content-type': 'application/json',
    'x-api-version': 2
  }
});

const getAuthorities = async () => {
  const { data } = await FSA.get('/Authorities')

  return data.authorities
}

const getEstablishments = async (authorityId) => {
  const { data } = await FSA.get(`/Establishments?localAuthorityId=${authorityId}&pageSize=0`)

  return data.establishments
}

const calculateRatingPercentages = (establishments) => {
	const ratings = establishments.reduce((acc, establishment) => {
		if (!acc[establishment.RatingValue]) {
			acc[establishment.RatingValue] = 0
		}

		acc[establishment.RatingValue] += 1

		return acc
	}, {})

	const totalRatings = Object.keys(ratings).reduce((acc, rating) => {
		return acc + ratings[rating]
	}, 0)

	return Object.keys(ratings).reduce((acc, rating) => {
		acc[rating] = ((ratings[rating] / totalRatings) * 100).toFixed(2)

		return acc
	}, {})
}

module.exports = {
	getAuthorities,
	getEstablishments,
	calculateRatingPercentages
}
