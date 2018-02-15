const cacheman = require('cacheman');

const cache = new cacheman({
  ttl: 36000
});

module.exports = cache
