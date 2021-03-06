angular.module('portfolio').component('youtubeCard', {
  templateUrl: '/views/youtube.html',
  require: {
    parent: '^^pictures'
  },
  controller: function (mainService, $interval, $timeout, $window) {
    const vm = this, {document} = $window,
      cardBody6 = document.getElementById('cardBody6'),
      getData = $timeout(async () => {
        const {youtubeText} = mainService,
          {data: {text}} = await youtubeText();
        vm.youtubeText = text[0].paragraph
        $timeout.cancel(getData)
      }, 750)

    vm.$onInit = async () => {
      const {getImageUrl} = vm.parent
      vm.cloudfrontUrl = await getImageUrl()
    }
    vm.show = true
    vm.showButtons = false
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      vm.text = ''
      vm.display = $timeout(() => {
        vm.textAnim = $interval(() => {
          if (vm.text.length === 132) {
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
      if (vm.text.length !== 132) {
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
      if (vm.text.length === 132) {
        return
      }
      vm.textShow = $timeout(() => {
        cardBody6.classList.remove('overlay2')
        cardBody6.className += ' overlay'
      }, 100)
    }
    vm.showPicture = () => {
      $timeout.cancel(vm.textShow)
      if (vm.text.length === 132) {
        return
      }
      vm.pictureShow = $timeout(() => {
        cardBody6.classList.remove('overlay')
        cardBody6.className += ' overlay2'
      }, 700)
    }
  }
})
