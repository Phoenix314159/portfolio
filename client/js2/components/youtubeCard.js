angular.module('portfolio').component('youtubeCard', {
  templateUrl: '/views/youtube.html',
  controller: function (mainService, $interval, $timeout) {
    let vm = this
    vm.text = ''
    vm.show = true
    vm.showButtons = false
    mainService.youtubeText().then(res => {
      vm.youtubeText = res.data.text[0].paragraph
    })
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      let textAnim = $interval(() => {
        if (vm.index !== 174) {
          $timeout(() => {
            vm.text += vm.youtubeText[vm.index]
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
