angular.module('portfolio').component('aboutMe', {
  templateUrl: '/views/aboutMe.html',
  controller: function (mainService, $timeout) {
    const vm = this,
      aboutMeText1TimeOut = $timeout(async () => {
        const {aboutMeText1} = mainService,
          {data: {text}} = await aboutMeText1();
        vm.aboutMeText1 = text[0].paragraph
        $timeout.cancel(aboutMeText1TimeOut)
      }, 5),
      aboutMeText2TimeOut = $timeout(async () => {
        const {aboutMeText2} = mainService,
          {data: {text}} = await aboutMeText2();
        vm.aboutMeText2 = text[0].paragraph
        $timeout.cancel(aboutMeText2TimeOut)
      }, 10)
  }
})
