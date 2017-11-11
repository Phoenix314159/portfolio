angular.module('portfolio').component('aboutMe', {
  templateUrl: '/views/aboutMe.html',
  controller: function (mainService, $timeout) {
    const vm = this,
      aboutMeText1 = $timeout(async () => {
        const res = await mainService.aboutMeText1();
        vm.aboutMeText1 = res.data.text[0].paragraph
        $timeout(aboutMeText1)
      }, 5),
      aboutMeText2 = $timeout(async () => {
        const res = await mainService.aboutMeText2()
        vm.aboutMeText2 = res.data.text[0].paragraph
        $timeout(aboutMeText2)
      }, 10)
  }
})
