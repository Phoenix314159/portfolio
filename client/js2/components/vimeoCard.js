angular.module('portfolio').component('vimeoCard', {
  templateUrl: '/views/vimeo.html',
  controller: function (mainService, $interval, $timeout, $window) {
    const vm = this, {document} = $window,
      cardBody2 = document.getElementById('cardBody2'),
      cardPicture2 = document.getElementById('cardPicture2'),
      getData = $timeout(() => {
        mainService.vimeoText().then(res => {
          const {data: {text}} = res
          vm.vimeoText = text[0].paragraph.trim()
          $timeout.cancel(getData)
        })
      }, 550)
    vm.show = true
    vm.showButtons = false
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      vm.text = ''
      vm.display = $timeout(() => {
        vm.textAnim = $interval(() => {
          if (vm.text.length === 194) {
            vm.stopText()
            vm.showButtons = true
          } else {
            vm.text += vm.vimeoText[vm.index]
            vm.index++
          }
        }, 15)
      }, 300)
    }
    vm.stopText = () => {
      $timeout.cancel(vm.display)
      $interval.cancel(vm.textAnim)
      const arr = vm.text.split('')
      if (vm.text.length !== 194) {
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
        cardPicture2.className = 'showPictureNot'
        cardBody2.classList.remove('overlay2')
      }
    }
    vm.showText = () => {
      $timeout.cancel(vm.pictureShow)
      vm.textShow = $timeout(() => {
        cardBody2.classList.remove('overlay2')
        cardBody2.className += ' overlay'
      }, 100)
    }
    vm.showPicture = () => {
      $timeout.cancel(vm.textShow)
      if (vm.text.length === 194) {
        return
      }
      vm.pictureShow = $timeout(() => {
        cardBody2.classList.remove('overlay')
        cardBody2.className += ' overlay2'
      }, 700)
    }
  }
})

