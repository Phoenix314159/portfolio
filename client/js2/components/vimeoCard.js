angular.module('portfolio').component('vimeoCard', {
  templateUrl: '/views/vimeo.html',
  controller: function (mainService, $interval, $timeout, $window) {
    const vm = this
    vm.show = true
    vm.showButtons = false
    vm.stop = false
    $timeout(() => {
      mainService.vimeoText().then(res => {
        const {data: {text}} = res
        vm.vimeoText = text[0].paragraph.trim()
      })
    }, 550)
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      vm.text = ''
      vm.textAnim = $interval(() => {
        if (vm.text.length === 194) {
          vm.stopText()
          vm.showButtons = true
        } else {
          vm.text += vm.vimeoText[vm.index]
          vm.index++
        }
      }, 15)
    }
    vm.stopText = () => {
      const {document} = $window
      $interval.cancel(vm.textAnim)
      if (vm.text.length === 194) {
        document.getElementById('cardPicture2').className = 'showPicture'
        document.getElementById('cardBody2').className = 'showCard'
        vm.stop = true
      }
    }
  }
})

