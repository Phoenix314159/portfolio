module.exports = app => {
  app.all('/api/*', (req, res, next) => {
    req.db = req.app.get('db')
    req.dbQuery = 'select * from text where name='
    next()
  })
}

