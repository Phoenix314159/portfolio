angular.module('portfolio').component('keyboardCard', {
  templateUrl: '/views/keyboard.html',

  controller: function (mainService, $interval, $timeout, $window) {
    const vm = this
    vm.show = true
    vm.showButtons = false
    vm.stop = false
    $timeout(() => {
      mainService.keyboardText().then(res => {
        const {data: {text}} = res
        vm.keyboardText = text[0].paragraph.trim()
      })
    }, 500)

    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      vm.text = ''
      vm.textAnim = $interval(() => {
        if (vm.text.length === 191) {
          vm.stopText()
          vm.showButtons = true
        } else {
          vm.text += vm.keyboardText[vm.index]
          vm.index++
        }
      }, 15)
    }
    vm.stopText = () => {
      const {document} = $window
      $interval.cancel(vm.textAnim)
      if (vm.text.length === 191) {
        document.getElementById('cardPicture').className = 'showPicture'
        document.getElementById('cardBody').className = 'showCard'
        vm.stop = true
      }
    }
  }
})
