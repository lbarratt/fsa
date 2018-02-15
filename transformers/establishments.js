const getRatingTotals = (establishments) => {
	return establishments.reduce((acc, establishment) => {
		if (!acc[establishment.RatingValue]) {
			acc[establishment.RatingValue] = 0
		}

		acc[establishment.RatingValue] += 1

		return acc
	}, {})
}

const calculateRatingPercentages = (establishments) => {
  const ratings = getRatingTotals(establishments)

	const totalRatings = Object.keys(ratings).reduce((acc, rating) => {
		return acc + ratings[rating]
	}, 0)

	return Object.keys(ratings).reduce((acc, rating) => {
		acc[rating] = ((ratings[rating] / totalRatings) * 100).toFixed(2)

		return acc
	}, {})
}

module.exports = {
	calculateRatingPercentages
}
