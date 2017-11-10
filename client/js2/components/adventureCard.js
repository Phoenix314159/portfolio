angular.module('portfolio').component('adventureCard', {
  templateUrl: '/views/adventure.html',
  controller: function (mainService, $interval, $timeout, $window) {
    const vm = this, {document} = $window,
      cardBody4 = document.getElementById('cardBody4'),
      cardPicture4 = document.getElementById('cardPicture4'),
      cancelTextForward = () => {
        $interval.cancel(vm.textAnim)
      },
      cancelTextBackward = () => {
        $interval.cancel(vm.backText)
      }
    vm.show = true
    vm.showButtons = false
    const getData = $timeout(() => {
      mainService.adventureText().then(res => {
        const {data: {text}} = res
        vm.adventureText = text[0].paragraph.trim()
        $timeout.cancel(getData)
      })
    }, 650)

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
            console.log('textAnim')
          }
        }, 15)
      }, 150)
    }

    vm.stopText = () => {
      $interval.cancel(vm.display)
      const arr = vm.text.split('')
      cancelTextForward()
      if (vm.text.length !== 188) {
        vm.backText = $interval(() => {
          if(vm.text.length === 0) {
            cancelTextBackward()
            return
          }
          arr.pop()
          vm.text = arr.join('')
          console.log('backText')
        }, 2)
      }
      else {
        cardPicture4.className = 'showPictureNot'
        cardBody4.classList.remove('overlay2')
      }
    }

    vm.showText = () => {
      $timeout.cancel(vm.pictureShow)
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