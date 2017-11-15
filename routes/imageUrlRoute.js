const  {cloudFrontUrl} = require('../config/dev')

module.exports = app => {
  app.get('/api/get_images', (req, res) => {
    res.send(cloudFrontUrl)
  })
}