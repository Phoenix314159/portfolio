const AWS = require('aws-sdk'),
  {s3: {Bucket}} = require('../config/dev')

AWS.config.loadFromPath('./config/config.json')
const s3Bucket = new AWS.S3({params: {Bucket}})
const params = {Bucket}

module.exports = app => {
  app.get('/api/get_images', (req, res) => {
    s3Bucket.listObjects(params, async (err, data) => {
      if (err) {
        res.status(500).send(err)
      }
      const images = data.Contents, arr = []
      for (let i = 0; i < images.length; i++) {
        const urlParams = {Bucket, Key: images[i].Key}
        let url = await s3Bucket.getSignedUrl('getObject', urlParams)
        arr.push(url)
      }
      res.status(200).send(arr)
    })
  })
}