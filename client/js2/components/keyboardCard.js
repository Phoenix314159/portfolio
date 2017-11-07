angular.module('portfolio').component('keyboardCard', {
  templateUrl: '/views/keyboard.html',

  controller: function (mainService, $interval, $timeout) {
    let vm = this
    vm.text = ''
    vm.show = true
    vm.showButtons = false
    mainService.keyboardText().then(res => {
      vm.keyboardText = res.data.text[0].paragraph
    })
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      let textAnim = $interval(() => {
        if (vm.index !== 188) {
          $timeout(() => {
            vm.text += vm.keyboardText[vm.index]
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
