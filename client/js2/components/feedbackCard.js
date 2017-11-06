angular.module('portfolio').component('feedbackCard', {
  templateUrl: '/views/feedback.html',
  controller: function (mainService, $interval, $timeout) {
    let vm = this
    vm.text = ''
    vm.show = true
    mainService.feedbackText().then(res => {
      vm.feedbackText = res.data.text[0].paragraph
    })
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      let textAnim = $interval(() => {
        if (vm.index !== 189) {
          $timeout(() => {
            vm.text += vm.feedbackText[vm.index]
            vm.index++
          }, 70)
        } else {
          $interval.cancel(textAnim)
        }
      }, 20)
    }
  }
})
