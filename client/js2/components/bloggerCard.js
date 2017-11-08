angular.module('portfolio').component('bloggerCard', {
  templateUrl: '/views/blogger.html',
  controller: function (mainService, $interval, $timeout, $window) {
    const vm = this
    vm.show = true
    vm.showButtons = false
    vm.stop = false
    $timeout(() => {
      mainService.bloggerText().then(res => {
        const {data: {text}} = res
        vm.bloggerText = text[0].paragraph.trim()
      })
    }, 900)
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      vm.text = ''
      vm.textAnim = $interval(() => {
        if (vm.text.length === 167) {
          vm.stopText()
          vm.showButtons = true
        } else {
          vm.text += vm.bloggerText[vm.index]
          vm.index++
        }
      }, 15)
    }
    vm.stopText = () => {
      const {document} = $window
      $interval.cancel(vm.textAnim)
      if (vm.text.length === 167) {
        document.getElementById('cardPicture9').className = 'showPicture'
        document.getElementById('cardBody9').className = 'showCard'
        vm.stop = true
      }
    }
  }
})
