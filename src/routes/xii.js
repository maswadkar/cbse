var express = require('express')
var xii_router = express.Router()

// middleware that is specific to this router
xii_router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
xii_router.get('/', function (req, res) {
  res.send('this is XII class page')
})
// define the about route
xii_router.get('/MATHEMATICS', function (req, res) {
  res.send('mathematics Page')
})

module.exports = xii_router
