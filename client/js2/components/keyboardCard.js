angular.module('portfolio').component('keyboardCard', {
  templateUrl: '/views/keyboard.html',
  controller: function (mainService, $interval, $timeout, $window) {
    const vm = this, {document} = $window,
      cardBody = document.getElementById('cardBody'),
      cardPicture = document.getElementById('cardPicture')
    vm.show = true
    vm.showButtons = false
    const getData = $timeout(() => {
      mainService.keyboardText().then(res => {
        const {data: {text}} = res
        vm.keyboardText = text[0].paragraph.trim()
        $timeout.cancel(getData)
      })
    }, 500)

    vm.displayText = () => {
      vm.show = false
      vm.start = false
      vm.index = 0
      vm.text = ''
      vm.display = $timeout(() => {
        vm.textAnim = $interval(() => {
          if (vm.text.length === 191) {
            vm.stopText()
            vm.showButtons = true
          } else {
            vm.text += vm.keyboardText[vm.index]
            vm.index++
          }
        }, 15)
      }, 150)
    }

    vm.stopText = () => {
      $timeout.cancel(vm.display)
      $interval.cancel(vm.textAnim)
      const arr = vm.text.split('')
      if (vm.text.length !== 191) {
        vm.backText = $interval(() => {
          if(vm.text.length === 0) {
            $interval.cancel(vm.backText)
            vm.text = ''
            return
          }
          arr.pop()
          vm.text = arr.join('')
        }, 2)
      }
      else {
        cardPicture.className = 'showPictureNot'
        cardBody.classList.remove('overlay2')
      }
    }

    vm.showText = () => {
      $timeout.cancel(vm.pictureShow)
      vm.textShow = $timeout(() => {
        cardBody.classList.remove('overlay2')
        cardBody.className += ' overlay'
      }, 100)
    }

    vm.showPicture = () => {
      $timeout.cancel(vm.textShow)
      if (vm.text.length === 191) {
        return
      }
      vm.pictureShow = $timeout(() => {
        cardBody.classList.remove('overlay')
        cardBody.className += ' overlay2'
      }, 700)
    }
  }
})
