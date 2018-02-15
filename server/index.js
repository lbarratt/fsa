const Koa = require('koa')
const render = require('koa-ejs')
const serve = require('koa-static')
const mount = require('koa-mount')
const logger = require('koa-logger')

const errorHandler = require('./middleware/error-handler')
const routes = require('./routes')

const app = new Koa()

render(app, {
  root: 'server/templates',
  viewExt: 'ejs',
  cache: false
})

if (process.env.NODE_ENV !== 'test') {
  app.use(logger())
}

app.use(errorHandler)
app.use(mount('/assets', serve('assets')))
app.use(routes)

module.exports = app
