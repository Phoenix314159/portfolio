angular.module('portfolio').component('keyboardCard', {
  templateUrl: '/views/keyboard.html',
  require: {
    parent: '^^cardPictures'
  },
  controller: function (mainService, $interval, $timeout, $window) {
    const vm = this, {document} = $window,
      cardBody = document.getElementById('cardBody'),
      getData = $timeout(async () => {
        const {keyboardText} = mainService, {data} = await keyboardText()
        vm.keyboardText = data.text[0].paragraph
        $timeout.cancel(getData)
      }, 500)

    vm.$onInit = async () => {
      vm.cloudfrontUrl = await vm.parent.getImageUrl()
    }

    vm.show = true
    vm.showButtons = false
    vm.displayText = () => {
      vm.show = false
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
      }, 300)
    }
    vm.stopText = () => {
      $timeout.cancel(vm.display)
      $interval.cancel(vm.textAnim)
      if (vm.text.length !== 191) {
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
      if (vm.text.length === 191) {
        return
      }
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
