angular.module('portfolio').service('mainService', function ($http) {
  const vm = this
  vm.aboutMeText1 = () => {
    return $http({
      method: 'GET',
      url: '/api/about_me1'
    })
  }

  vm.aboutMeText2 = () => {
    return $http({
      method: 'GET',
      url: '/api/about_me2'
    })
  }

  vm.keyboardText = () => {
    return $http({
      method: 'GET',
      url: '/api/keyboard_text'
    })
  }

  vm.vimeoText = () => {
    return $http({
      method: 'GET',
      url: '/api/vimeo_text'
    })
  }

  vm.solarText = () => {
    return $http({
      method: 'GET',
      url: '/api/solar_text'
    })
  }

  vm.adventureText = () => {
    return $http({
      method: 'GET',
      url: '/api/adventure_text'
    })
  }

  vm.toolboxText = () => {
    return $http({
      method: 'GET',
      url: '/api/toolbox_text'
    })
  }

  vm.youtubeText = () => {
    return $http({
      method: 'GET',
      url: '/api/youtube_text'
    })
  }

  vm.feedbackText = () => {
    return $http({
      method: 'GET',
      url: '/api/feedback_text'
    })
  }

  vm.weatherText = () => {
    return $http({
      method: 'GET',
      url: '/api/weather_text'
    })
  }

  vm.bloggerText = () => {
    return $http({
      method: 'GET',
      url: '/api/blogger_text'
    })
  }

  vm.actressesText = () => {
    return $http({
      method: 'GET',
      url: '/api/actresses_text'
    })
  }

  vm.starWarsText = () => {
    return $http({
      method: 'GET',
      url: '/api/star_wars_text'
    })
  }

  vm.guitarText = () => {
    return $http({
      method: 'GET',
      url: '/api/guitar_text'
    })
  }
})
