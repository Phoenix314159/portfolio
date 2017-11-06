angular.module('portfolio').component('aboutMe', {
  templateUrl: '/views/aboutMe.html',
  controller: function (mainService) {
    let vm = this
    mainService.aboutMeText1().then(res => {
      vm.aboutMeText1 =  res.data.text[0].paragraph
    })
    mainService.aboutMeText2().then(res => {
      vm.aboutMeText2 =  res.data.text[0].paragraph
    })
  }
})
