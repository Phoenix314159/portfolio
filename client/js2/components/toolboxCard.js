angular.module('portfolio').component('toolboxCard', {
  templateUrl: '/views/toolbox.html',
  controller: function (mainService, $interval, $timeout) {
    const vm = this
    vm.show = true
    vm.showButtons = false
    vm.stop = false
    $timeout(() => {
      mainService.toolboxText().then(res => {
        const {data: {text}} = res
        vm.toolboxText = text[0].paragraph.trim()
      })
    }, 700)
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      vm.text = ''
      vm.textAnim = $interval(() => {
        if (vm.text.length === 162) {
          vm.stopText()
          vm.showButtons = true
        } else {
          vm.text += vm.toolboxText[vm.index]
          vm.index++
        }
      }, 15)
    }
    vm.stopText = () => {
      $interval.cancel(vm.textAnim)
      if (vm.text.length === 162) {
        document.getElementById('cardPicture5').className = 'showPicture'
        document.getElementById('cardBody5').className = 'showCard'
        vm.stop = true
      }
    }
  }
})
