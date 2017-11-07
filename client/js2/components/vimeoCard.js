angular.module('portfolio').component('vimeoCard', {
  templateUrl: '/views/vimeo.html',
  controller: function (mainService, $interval, $timeout) {
    let vm = this
    vm.text = ''
    vm.show = true
    vm.showButtons = false
    mainService.vimeoText().then(res => {
      vm.vimeoText = res.data.text[0].paragraph
    })
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      let textAnim = $interval(() => {
        if (vm.index !== 191) {
          $timeout(() => {
            vm.text += vm.vimeoText[vm.index]
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
