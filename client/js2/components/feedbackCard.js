angular.module('portfolio').component('feedbackCard', {
  templateUrl: '/views/feedback.html',
  controller: function (mainService, $interval, $timeout) {
    const vm = this
    vm.show = true
    vm.showButtons = false
    vm.stop = false
    $timeout(() => {
      mainService.feedbackText().then(res => {
        const {data: {text}} = res
        vm.feedbackText = text[0].paragraph.trim()
      })
    }, 800)
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      vm.text = ''
      vm.textAnim = $interval(() => {
        if (vm.text.length === 192) {
          vm.stopText()
          vm.showButtons = true
        } else {
          vm.text += vm.feedbackText[vm.index]
          vm.index++
        }
      }, 15)
    }
    vm.stopText = () => {
      $interval.cancel(vm.textAnim)
      if (vm.text.length === 192) {
        document.getElementById('cardPicture7').className = 'showPicture'
        document.getElementById('cardBody7').className = 'showCard'
        vm.stop = true
      }
    }
  }
})
