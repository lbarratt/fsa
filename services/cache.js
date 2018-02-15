const Cacheman = require('cacheman')

const cache = new Cacheman({
  ttl: 36000
})

module.exports = cache
