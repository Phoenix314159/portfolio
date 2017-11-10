angular.module('portfolio').component('feedbackCard', {
  templateUrl: '/views/feedback.html',
  controller: function (mainService, $interval, $timeout, $window) {
    const vm = this, {document} = $window,
      cardBody7 = document.getElementById('cardBody7'),
      cardPicture7 = document.getElementById('cardPicture7'),
      getData = $timeout(() => {
        mainService.feedbackText().then(res => {
          const {data: {text}} = res
          vm.feedbackText = text[0].paragraph.trim()
          $timeout.cancel(getData)
        })
      }, 800)
    vm.show = true
    vm.showButtons = false
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      vm.text = ''
      vm.display = $timeout(() => {
        vm.textAnim = $interval(() => {
          if (vm.text.length === 192) {
            vm.stopText()
            vm.showButtons = true
          } else {
            vm.text += vm.feedbackText[vm.index]
            vm.index++
          }
        }, 15)
      }, 300)
    }
    vm.stopText = () => {
      $timeout.cancel(vm.display)
      $interval.cancel(vm.textAnim)
      const arr = vm.text.split('')
      if (vm.text.length !== 192) {
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
        cardPicture7.className = 'showPictureNot'
        cardBody7.classList.remove('overlay2')
      }
    }
    vm.showText = () => {
      $timeout.cancel(vm.pictureShow)
      vm.textShow = $timeout(() => {
        cardBody7.classList.remove('overlay2')
        cardBody7.className += ' overlay'
      }, 100)
    }
    vm.showPicture = () => {
      $timeout.cancel(vm.textShow)
      if (vm.text.length === 192) {
        return
      }
      vm.pictureShow = $timeout(() => {
        cardBody7.classList.remove('overlay')
        cardBody7.className += ' overlay2'
      }, 700)
    }
  }
})
