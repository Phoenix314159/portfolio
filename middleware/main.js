const dbMiddleWare = require('./db'),
  bodyParser = require('body-parser');


module.exports = app => {
  app.use(bodyParser.json())
  dbMiddleWare(app)
}
