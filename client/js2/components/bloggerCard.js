angular.module('portfolio').component('bloggerCard', {
  templateUrl: '/views/blogger.html',
  controller: function (mainService, $interval, $timeout, $window) {
    const vm = this, {document} = $window,
      cardBody9 = document.getElementById('cardBody9'),
      cardPicture9 = document.getElementById('cardPicture9'),
      getData = $timeout(() => {
        mainService.bloggerText().then(res => {
          const {data: {text}} = res
          vm.bloggerText = text[0].paragraph.trim()
          $timeout.cancel(getData)
        })
      }, 900)
    vm.show = true
    vm.showButtons = false
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      vm.text = ''
      vm.display = $timeout(() => {
        vm.textAnim = $interval(() => {
          if (vm.text.length === 167) {
            vm.stopText()
            vm.showButtons = true
          } else {
            vm.text += vm.bloggerText[vm.index]
            vm.index++
          }
        }, 15)
      }, 300)
    }
    vm.stopText = () => {
      $timeout.cancel(vm.display)
      $interval.cancel(vm.textAnim)
      const arr = vm.text.split('')
      if (vm.text.length !== 167) {
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
        cardPicture9.className = 'showPictureNot'
        cardBody9.classList.remove('overlay2')
      }
    }
    vm.showText = () => {
      $timeout.cancel(vm.pictureShow)
      vm.textShow = $timeout(() => {
        cardBody9.classList.remove('overlay2')
        cardBody9.className += ' overlay'
      }, 100)
    }
    vm.showPicture = () => {
      $timeout.cancel(vm.textShow)
      if (vm.text.length === 167) {
        return
      }
      vm.pictureShow = $timeout(() => {
        cardBody9.classList.remove('overlay')
        cardBody9.className += ' overlay2'
      }, 700)
    }
  }
})
