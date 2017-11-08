angular.module('portfolio').component('bloggerCard', {
  templateUrl: '/views/blogger.html',
  controller: function (mainService, $interval, $timeout) {
    let vm = this
    vm.show = true
    vm.showButtons = false
    mainService.bloggerText().then(res => {
      vm.bloggerText = res.data.text[0].paragraph
    })
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      vm.text = ''
      let textAnim = $interval(() => {
        vm.stopText = () => {
          $interval.cancel(textAnim)
        }
        if (vm.index !== 164) {
          $timeout(() => {
            vm.text += vm.bloggerText[vm.index]
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
