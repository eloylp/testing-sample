const express = require('express')
const app = express()
const { sum } = require('./src/calculator')

app.use('/', express.static(__dirname + '/public'))

app.get('/', function (req, res) {
  res.render('index.html')
})

app.get('/sum', function (req, res) {
  res.send({
    result: sum(req.query.sumA, req.query.sumB)
  })
})

module.exports = app