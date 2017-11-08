angular.module('portfolio').component('adventureCard', {
  templateUrl: '/views/adventure.html',
  controller: function (mainService, $interval, $timeout) {
    let vm = this
    vm.show = true
    vm.showButtons = false
    mainService.adventureText().then(res => {
      vm.adventureText = res.data.text[0].paragraph
    })
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      vm.text = ''
      let textAnim = $interval(() => {
        vm.stopText = () => {
          $interval.cancel(textAnim)
        }
        if (vm.index !== 185) {
          $timeout(() => {
            vm.text += vm.adventureText[vm.index]
            vm.index++
          }, 70)
        } else {
          $interval.cancel(textAnim)
          vm.showButtons = true
        }
      }, 20)
    }
  }
})
