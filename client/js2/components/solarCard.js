angular.module('portfolio').component('solarCard', {
  templateUrl: '/views/solar.html',
  controller: function (mainService, $interval, $timeout) {
    let vm = this
    vm.text = ''
    vm.show = true
    mainService.solarText().then(res => {
      vm.solarText = res.data.text[0].paragraph
    })
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      let textAnim = $interval(() => {
        if (vm.index !== 190) {
          $timeout(() => {
            vm.text += vm.solarText[vm.index]
            vm.index++
          }, 70)
        } else {
          $interval.cancel(textAnim)
        }
      }, 20)
    }
  }
})
