angular.module('portfolio').component('weatherCard', {
  templateUrl: '/views/weather.html',
  controller: function (mainService, $interval, $timeout, $window) {
    const vm = this
    vm.show = true
    vm.showButtons = false
    vm.stop = false
    $timeout(() => {
      mainService.weatherText().then(res => {
        const {data: {text}} = res
        vm.weatherText = text[0].paragraph.trim()
      })
    }, 850)
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      vm.text = ''
      vm.textAnim = $interval(() => {
        if (vm.text.length === 172) {
          vm.stopText()
          vm.showButtons = true
        } else {
          vm.text += vm.weatherText[vm.index]
          vm.index++
        }
      }, 15)
    }
    vm.stopText = () => {
      const {document} = $window
      $interval.cancel(vm.textAnim)
      if (vm.text.length === 172) {
        document.getElementById('cardPicture8').className = 'showPicture'
        document.getElementById('cardBody8').className = 'showCard'
        vm.stop = true
      }
    }
  }
})
