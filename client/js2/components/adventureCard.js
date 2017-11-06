angular.module('portfolio').component('adventureCard', {
  templateUrl: '/views/adventure.html',
  controller: function (mainService, $interval, $timeout) {
    let vm = this
    vm.text = ''
    vm.show = true
    mainService.adventureText().then(res => {
      vm.adventureText = res.data.text[0].paragraph
    })
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      let textAnim = $interval(() => {
        if (vm.index !== 185) {
          $timeout(() => {
            vm.text += vm.adventureText[vm.index]
            vm.index++
          }, 70)
        } else {
          $interval.cancel(textAnim)
        }
      }, 20)
    }
  }
})
