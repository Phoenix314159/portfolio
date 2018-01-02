const asyncError = require('../middleware/catchErrors'),
  {aboutMe1, aboutMe2, keyboards,
    vimeo, solar, adventure,
    toolbox, youtube, feedback,
    weather, blogger, actresses, starWars, guitar} = require('../controllers/mainCtrl');

module.exports = app => {
  app.get('/api/about_me1', asyncError(aboutMe1))
  app.get('/api/about_me2', asyncError(aboutMe2))
  app.get('/api/keyboard_text', asyncError(keyboards))
  app.get('/api/vimeo_text', asyncError(vimeo))
  app.get('/api/solar_text', asyncError(solar))
  app.get('/api/adventure_text', asyncError(adventure))
  app.get('/api/toolbox_text', asyncError(toolbox))
  app.get('/api/youtube_text', asyncError(youtube))
  app.get('/api/feedback_text', asyncError(feedback))
  app.get('/api/weather_text', asyncError(weather))
  app.get('/api/blogger_text', asyncError(blogger))
  app.get('/api/actresses_text', asyncError(actresses))
  app.get('/api/star_wars_text', asyncError(starWars))
  app.get('/api/guitar_text', asyncError(guitar))
}


