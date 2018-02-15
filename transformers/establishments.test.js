const { calculateRatingPercentages } = require('./establishments')
const { establishments } = require('../test/establishments.json')

test('calculateRatingPercentages receives an array of establishments and returns an object of rating distributions as percentages', async () => {
  const ratings = calculateRatingPercentages(establishments)

  expect(ratings[5]).toBe('50.00')
  expect(ratings[1]).toBe('25.00')
  expect(ratings['Exempt']).toBe('25.00')
})
