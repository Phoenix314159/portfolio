angular.module('portfolio').component('adventureCard', {
  templateUrl: '/views/adventure.html',
  controller: function (mainService, $interval, $timeout, $window) {
    const vm = this
    vm.show = true
    vm.showButtons = false
    vm.stop = false
    $timeout(() => {
      mainService.adventureText().then(res => {
        const {data: {text}} = res
        vm.adventureText = text[0].paragraph.trim()
      })
    }, 650)
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      vm.text = ''
      vm.textAnim = $interval(() => {
        if (vm.index === 188) {
          vm.stopText()
          vm.showButtons = true
        } else {
          vm.text += vm.adventureText[vm.index]
          vm.index++
        }
      }, 15)
    }
    vm.stopText = () => {
      const {document} = $window
      $interval.cancel(vm.textAnim)
      if (vm.text.length === 188) {
        document.getElementById('cardPicture4').className = 'showPicture'
        document.getElementById('cardBody4').className = 'showCard'
        vm.stop = true
      }
    }
  }
})
