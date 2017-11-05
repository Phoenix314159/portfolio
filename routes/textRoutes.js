const mainCtrl = require('../controllers/mainCtrl')

module.exports = app => {
  app.get('/api/about_me1', mainCtrl.aboutMe1)
  app.get('/api/about_me2', mainCtrl.aboutMe2)
  app.get('/api/keyboard_text', mainCtrl.keyboards)
  app.get('/api/vimeo_text', mainCtrl.vimeo)
  app.get('/api/solar_text', mainCtrl.solar)
  app.get('/api/adventure_text', mainCtrl.adventure)
  app.get('/api/toolbox_text', mainCtrl.toolbox)
  app.get('/api/youtube_text', mainCtrl.youtube)
  app.get('/api/feedback_text', mainCtrl.feedback)
  app.get('/api/weather_text', mainCtrl.weather)
  app.get('/api/blogger_text', mainCtrl.blogger)
}


