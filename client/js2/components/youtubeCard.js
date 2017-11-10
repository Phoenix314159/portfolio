angular.module('portfolio').component('youtubeCard', {
  templateUrl: '/views/youtube.html',
  controller: function (mainService, $interval, $timeout, $window) {
    const vm = this, {document} = $window,
      cardBody6 = document.getElementById('cardBody6'),
      cardPicture6 = document.getElementById('cardPicture6'),
      getData = $timeout(() => {
        mainService.youtubeText().then(res => {
          const {data: {text}} = res
          vm.youtubeText = text[0].paragraph.trim()
          $timeout.cancel(getData)
        })
      }, 750)
    vm.show = true
    vm.showButtons = false
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      vm.text = ''
      vm.display = $timeout(() => {
        vm.textAnim = $interval(() => {
          if (vm.text.length === 177) {
            vm.stopText()
            vm.showButtons = true
          } else {
            vm.text += vm.youtubeText[vm.index]
            vm.index++
          }
        }, 15)
      }, 300)
    }
    vm.stopText = () => {
      $timeout.cancel(vm.display)
      $interval.cancel(vm.textAnim)
      if (vm.text.length !== 177) {
        vm.backText = $interval(() => {
          if (vm.text.length === 0) {
            $interval.cancel(vm.backText)
            return
          }
          vm.text = vm.text.replace(/.$/, '')
        }, 2)
      }
    }
    vm.showText = () => {
      $timeout.cancel(vm.pictureShow)
      if (vm.text.length === 177) {
        return
      }
      vm.textShow = $timeout(() => {
        cardBody6.classList.remove('overlay2')
        cardBody6.className += ' overlay'
      }, 100)
    }
    vm.showPicture = () => {
      $timeout.cancel(vm.textShow)
      if (vm.text.length === 177) {
        return
      }
      vm.pictureShow = $timeout(() => {
        cardBody6.classList.remove('overlay')
        cardBody6.className += ' overlay2'
      }, 700)
    }
  }
})
