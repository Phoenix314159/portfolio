angular.module('portfolio').component('vimeoCard', {
  templateUrl: '/views/vimeo.html',
  require: {
    parent: '^^cardPictures'
  },
  controller: function (mainService, $interval, $timeout, $window) {
    const vm = this, {document} = $window,
      cardBody2 = document.getElementById('cardBody2'),
      getData = $timeout(async () => {
        const {vimeoText} = mainService, {data} = await vimeoText();
        vm.vimeoText = data.text[0].paragraph
        $timeout.cancel(getData)
      }, 550)

    vm.$onChanges = async () => {
      const images = await vm.parent.getImages()
      vm.vimeoImage = images[6]
    }
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
      if (vm.text.length !== 194) {
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
      if (vm.text.length === 194) {
        return
      }
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

