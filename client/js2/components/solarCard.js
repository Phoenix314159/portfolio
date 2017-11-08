angular.module('portfolio').component('solarCard', {
  templateUrl: '/views/solar.html',
  controller: function (mainService, $interval, $timeout, $window) {
    const vm = this
    vm.show = true
    vm.showButtons = false
    vm.stop = false
    $timeout(() => {
      mainService.solarText().then(res => {
        const {data: {text}} = res
        vm.solarText = text[0].paragraph
      })
    }, 600)
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      vm.text = ''
      vm.textAnim = $interval(() => {
        if (vm.text.length === 193) {
          vm.stopText()
          vm.showButtons = true
        } else {
          vm.text += vm.solarText[vm.index]
          vm.index++
        }
      }, 15)
    }
    vm.stopText = () => {
      const {document} = $window
      $interval.cancel(vm.textAnim)
      if (vm.text.length === 193) {
        document.getElementById('cardPicture3').className = 'showPicture'
        document.getElementById('cardBody3').className = 'showCard'
        vm.stop = true
      }
    }
  }
})
