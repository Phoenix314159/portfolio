angular.module('portfolio').component('feedbackCard', {
  templateUrl: '/views/feedback.html',
  controller: function (mainService, $interval, $timeout) {
    let vm = this
    vm.show = true
    vm.showButtons = false
    mainService.feedbackText().then(res => {
      vm.feedbackText = res.data.text[0].paragraph
    })
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      vm.text = ''
      let textAnim = $interval(() => {
        vm.stopText = () => {
          $interval.cancel(textAnim)
        }
        if (vm.index !== 189) {
          $timeout(() => {
            vm.text += vm.feedbackText[vm.index]
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
