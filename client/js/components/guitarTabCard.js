angular.module('portfolio').component('guitarTabCard', {
  templateUrl: '/views/guitarTab.html',
  require: {
    parent: '^^pictures'
  },
  controller: function (mainService, $interval, $timeout, $window) {
    const vm = this, {document} = $window,
      cardBody12 = document.getElementById('cardBody12'),
      getData = $timeout(async () => {
        const {guitarText} = mainService,
          {data: {text}} = await guitarText();
        vm.guitarText = text[0].paragraph
        $timeout.cancel(getData)
      }, 950)

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
          if (vm.text.length === 175) {
            vm.stopText()
            vm.showButtons = true
          } else {
            vm.text += vm.guitarText[vm.index]
            vm.index++
          }
        }, 15)
      }, 300)
    }
    vm.stopText = () => {
      $timeout.cancel(vm.display)
      $interval.cancel(vm.textAnim)
      if (vm.text.length !== 175) {
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
      if (vm.text.length === 175) {
        return
      }
      vm.textShow = $timeout(() => {
        cardBody12.classList.remove('overlay2')
        cardBody12.className += ' overlay'
      }, 100)
    }
    vm.showPicture = () => {
      $timeout.cancel(vm.textShow)
      if (vm.text.length === 175) {
        return
      }
      vm.pictureShow = $timeout(() => {
        cardBody12.classList.remove('overlay')
        cardBody12.className += ' overlay2'
      }, 700)
    }
  }
})

