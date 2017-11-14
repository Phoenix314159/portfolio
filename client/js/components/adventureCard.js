angular.module('portfolio').component('adventureCard', {
  templateUrl: '/views/adventure.html',
  controller: function (mainService, $interval, $timeout, $window) {
    const vm = this, {document} = $window,
      cardBody4 = document.getElementById('cardBody4'),
      getData = $timeout(async () => {
        const {adventureText} = mainService, {data} = await adventureText()
        vm.adventureText = data.text[0].paragraph
        $timeout.cancel(getData)
      }, 650)
    vm.show = true
    vm.showButtons = false
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      vm.text = ''
      vm.display = $timeout(() => {
        vm.textAnim = $interval(() => {
          if (vm.index === 188) {
            vm.stopText()
            vm.showButtons = true
          } else {
            vm.text += vm.adventureText[vm.index]
            vm.index++
          }
        }, 15)
      }, 300)
    }
    vm.stopText = () => {
      $timeout.cancel(vm.display)
      $interval.cancel(vm.textAnim)
      if (vm.text.length !== 188) {
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
      if (vm.text.length === 188) {
        return
      }
      vm.textShow = $timeout(() => {
        cardBody4.classList.remove('overlay2')
        cardBody4.className += ' overlay'
      }, 100)
    }
    vm.showPicture = () => {
      $timeout.cancel(vm.textShow)
      if (vm.text.length === 188) {
        return
      }
      vm.pictureShow = $timeout(() => {
        cardBody4.classList.remove('overlay')
        cardBody4.className += ' overlay2'
      }, 700)
    }
  }
})