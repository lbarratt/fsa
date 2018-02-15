const express = require('express')

const { getAuthorities, getEstablishments, calculateRatingPercentages } = require('../services/fsa')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'server/templates')

app.use('/assets', express.static('assets'))

app.get('/', async (req, res) => {
	const authorityId = parseInt(req.query.authorityId) || 0

  const authorities = await getAuthorities()
  const authority = authorities.find(a => a.LocalAuthorityId === authorityId)

  const pageData = {
		authorities,
		authorityId,
		ratings: false
	}

  if (authority) {
    const establishments = await getEstablishments(authorityId)
    pageData.ratings = calculateRatingPercentages(establishments)
  }

  res.render('layout', pageData)
})

module.exports = app
