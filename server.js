const express = require('express'),
  path = require('path'),
  massive = require('massive'),
  {port, dbConnection} = require('./config/dev'),
  app = express();

(async () => { app.set('db', await massive(dbConnection)) })()
app.use('/', express.static(path.join(__dirname, '/dist')))

require('./middleware/main')(app)
require('./routes/textRoutes')(app)
require('./middleware/serverError')(app)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
