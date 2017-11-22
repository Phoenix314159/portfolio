angular.module('portfolio').component('weatherCard', {
  templateUrl: '/views/weather.html',
  require: {
    parent: '^^pictures'
  },
  controller: function (mainService, $interval, $timeout, $window) {
    const vm = this, {document} = $window,
      cardBody8 = document.getElementById('cardBody8'),
      getData = $timeout(async () => {
        const {weatherText} = mainService,
          {data: {text}} = await weatherText();
        vm.weatherText = text[0].paragraph
        $timeout.cancel(getData)
      }, 850)

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
          if (vm.text.length === 172) {
            vm.stopText()
            vm.showButtons = true
          } else {
            vm.text += vm.weatherText[vm.index]
            vm.index++
          }
        }, 15)
      }, 300)
    }
    vm.stopText = () => {
      $timeout.cancel(vm.display)
      $interval.cancel(vm.textAnim)
      if (vm.text.length !== 172) {
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
      if (vm.text.length === 172) {
        return
      }
      vm.textShow = $timeout(() => {
        cardBody8.classList.remove('overlay2')
        cardBody8.className += ' overlay'
      }, 100)
    }
    vm.showPicture = () => {
      $timeout.cancel(vm.textShow)
      if (vm.text.length === 172) {
        return
      }
      vm.pictureShow = $timeout(() => {
        cardBody8.classList.remove('overlay')
        cardBody8.className += ' overlay2'
      }, 700)
    }
  }
})
