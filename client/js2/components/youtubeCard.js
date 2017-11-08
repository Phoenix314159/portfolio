angular.module('portfolio').component('youtubeCard', {
  templateUrl: '/views/youtube.html',
  controller: function (mainService, $interval, $timeout, $window) {
    const vm = this
    vm.show = true
    vm.showButtons = false
    vm.stop = false
    $timeout(() => {
      mainService.youtubeText().then(res => {
        const {data: {text}} = res
        vm.youtubeText = text[0].paragraph.trim()
      })
    }, 750)
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      vm.text = ''
      vm.textAnim = $interval(() => {
        if (vm.text.length === 177) {
          vm.stopText()
          vm.showButtons = true
        } else {
          vm.text += vm.youtubeText[vm.index]
          vm.index++
        }
      }, 15)
    }
    vm.stopText = () => {
      const {document} = $window
      $interval.cancel(vm.textAnim)
      if (vm.text.length === 177) {
        document.getElementById('cardPicture6').className = 'showPicture'
        document.getElementById('cardBody6').className = 'showCard'
        vm.stop = true
      }
    }
  }
})
