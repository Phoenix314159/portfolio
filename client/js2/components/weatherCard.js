angular.module('portfolio').component('weatherCard', {
  templateUrl: '/views/weather.html',
  controller: function (mainService, $interval, $timeout, $window) {
    const vm = this, {document} = $window,
      cardBody8 = document.getElementById('cardBody8'),
      cardPicture8 = document.getElementById('cardPicture8'),
      getData = $timeout(() => {
        mainService.weatherText().then(res => {
          const {data: {text}} = res
          vm.weatherText = text[0].paragraph.trim()
          $timeout.cancel(getData)
        })
      }, 850)
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
      const arr = vm.text.split('')
      if (vm.text.length !== 172) {
        vm.backText = $interval(() => {
          if (vm.text.length === 0) {
            $interval.cancel(vm.backText)
            return
          }
          arr.pop()
          vm.text = arr.join('')
        }, 2)
      }
      else {
        cardPicture8.className = 'showPictureNot'
        cardBody8.classList.remove('overlay2')
      }
    }
    vm.showText = () => {
      $timeout.cancel(vm.pictureShow)
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
