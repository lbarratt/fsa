const koaRouter = require('koa-router')
const router = new koaRouter()

const cache = require('../../services/cache')
const { getAuthorities, getEstablishments } = require('../../services/fsa')
const { calculateRatingPercentages } = require('../../transformers/establishments')

router.get('/', async (ctx) => {
  const authorityId = parseInt(ctx.query.authorityId) || 0
  const authorities = await cache.wrap('authorities', getAuthorities)
  const authority = authorities.find(a => a.LocalAuthorityId === authorityId)

  const data = {
    authorities,
    authorityId,
    ratings: false
  }

  if (authority) {
    const establishments = await cache.wrap(`establishments/${authorityId}`, () => {
      return getEstablishments(authorityId)
    })

    data.ratings = calculateRatingPercentages(establishments)
  }

  await ctx.render('layout', data)
})

module.exports = router.routes()
