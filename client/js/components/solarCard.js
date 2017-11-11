angular.module('portfolio').component('solarCard', {
  templateUrl: '/views/solar.html',
  controller: function (mainService, $interval, $timeout, $window) {
    const vm = this, {document} = $window,
      cardBody3 = document.getElementById('cardBody3'),
      cardPicture3 = document.getElementById('cardPicture3'),
      getData = $timeout(async () => {
        const res = await mainService.solarText();
        vm.solarText = res.data.text[0].paragraph
        $timeout.cancel(getData)
      }, 600)
    vm.show = true
    vm.showButtons = false
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      vm.text = ''
      vm.display = $timeout(() => {
        vm.textAnim = $interval(() => {
          if (vm.text.length === 193) {
            vm.stopText()
            vm.showButtons = true
          } else {
            vm.text += vm.solarText[vm.index]
            vm.index++
          }
        }, 15)
      }, 300)
    }
    vm.stopText = () => {
      $timeout.cancel(vm.display)
      $interval.cancel(vm.textAnim)
      if (vm.text.length !== 193) {
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
      if (vm.text.length === 193) {
        return
      }
      vm.textShow = $timeout(() => {
        cardBody3.classList.remove('overlay2')
        cardBody3.className += ' overlay'
      }, 100)
    }
    vm.showPicture = () => {
      $timeout.cancel(vm.textShow)
      if (vm.text.length === 193) {
        return
      }
      vm.pictureShow = $timeout(() => {
        cardBody3.classList.remove('overlay')
        cardBody3.className += ' overlay2'
      }, 700)
    }
  }
})