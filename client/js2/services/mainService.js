angular.module('portfolio').service('mainService', function ($http) {
  let vm = this
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
    return `Built using AngularJS and Node.
            Uses Axios in the backend to fetch data from
            an API containing arrays of coordinate data. Uses the Google maps API
            to plot the points on an interactive map.`
  }
  vm.toolboxText = () => {
    return ` Built using AngularJS and Node. Uses a third-party API for currency
             exchange rates. Contains useful tools: currency converter, calculator,
             stopwatch, and a timer.`
  }
  vm.youtubeText = () => {
    return ` Built using ReactJS and Node. Uses a proxy so the backend can
             communicate with the front-end. Uses Axios to make http requests
             to the Youtube API so users can search for videos.`
  }
  vm.feedbackText = () => {
    return ` Built using ReactJS, Redux, and Node. This is an App for start-ups to be able to
             send out survey emails to clients for receiving feedback.
             Authentication is done with Google using passport.js.`
  }
  vm.weatherText = () => {
    return ` Built using ReactJS, Redux, and Node. Retrieves data from the Open Maps API to display
             weather data from any city searched for. Uses the Google Maps API to display the map.`
  }
  vm.bloggerText = () => {
    return `Built using ReactJS, Redux, Redux-Form, and Node. Retrieves a
            list of blog posts from a third-party API.
            Allows users to view and delete posts once they are logged in.`
  }
})
