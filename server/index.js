const express = require('express')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'server/templates')

app.use('/assets', express.static('assets'))

app.get('/', (req, res) => {
  res.render('layout')
})

module.exports = app
