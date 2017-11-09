angular.module('portfolio').component('aboutMe', {
  templateUrl: '/views/aboutMe.html',
  controller: function (mainService, $timeout) {
    const vm = this
    $timeout(() => {
      mainService.aboutMeText1().then(res => {
        vm.aboutMeText1 = res.data.text[0].paragraph
      })
    }, 45)
    $timeout(() => {
      mainService.aboutMeText2().then(res => {
        vm.aboutMeText2 = res.data.text[0].paragraph
      })
    }, 50)
  }
})
