angular.module('portfolio').service('mainService', function () {
  let vm = this
  vm.aboutMeText1 = () => {
    return `Since I was young, figuring out how things work has been one of my primary
            interests. Later in life, I would solve problems using calculus and advanced
            mathematics and also create works of original music.`
  }
  vm.aboutMeText2 = () => {
    return `In my constant journey of learning new concepts of which I thoroughly enjoy, I
            have found web development to be exciting. It's awesome to create web 
            applications that are useful and to be able to share them with the world.`
  }
  vm.keyboardText = () => {
    return `Built using AngularJS 1.5 components, Node, and SQL. This is an e-commerce 
            site where users are able to order products with payments processed using Stripe
            and authentication is done locally.`
  }
  vm.vimeoText = () => {
    return `Built using AngularJS, Node, and uses Vimeo's developer API.
            Users are able to search for and upload videos, and post comments on videos.
            These changes are reflected on the user's Vimeo Account.`
  }
  vm.solarText = () => {
    return `Built using AngularJS, Node, and SQL. Displays information about the
            planets in the solar system by clicking on the planet images.
            Data is displayed sequentially by using the $interval service.`
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
