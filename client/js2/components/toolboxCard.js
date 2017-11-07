angular.module('portfolio').component('toolboxCard', {
  templateUrl: '/views/toolbox.html',
  controller: function (mainService, $interval, $timeout) {
    let vm = this
    vm.text = ''
    vm.show = true
    vm.showButtons = false
    mainService.toolboxText().then(res => {
      vm.toolboxText = res.data.text[0].paragraph
    })
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      let textAnim = $interval(() => {
        if (vm.index !== 159) {
          $timeout(() => {
            vm.text += vm.toolboxText[vm.index]
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
