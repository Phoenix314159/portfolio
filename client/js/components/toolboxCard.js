angular.module('portfolio').component('toolboxCard', {
  templateUrl: '/views/toolbox.html',
  controller: function (mainService, $interval, $timeout, $window) {
    const vm = this, {document} = $window,
      cardBody5 = document.getElementById('cardBody5'),
      cardPicture5 = document.getElementById('cardPicture5'),
      getData = $timeout(async () => {
        const res = await mainService.toolboxText();
        vm.toolboxText = res.data.text[0].paragraph
        $timeout.cancel(getData)
      }, 700)
    vm.show = true
    vm.showButtons = false
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      vm.text = ''
      vm.display = $timeout(() => {
        vm.textAnim = $interval(() => {
          if (vm.text.length === 162) {
            vm.stopText()
            vm.showButtons = true
          } else {
            vm.text += vm.toolboxText[vm.index]
            vm.index++
          }
        }, 15)
      }, 300)
    }
    vm.stopText = () => {
      $timeout.cancel(vm.display)
      $interval.cancel(vm.textAnim)
      if (vm.text.length !== 162) {
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
      if (vm.text.length === 162) {
        return
      }
      vm.textShow = $timeout(() => {
        cardBody5.classList.remove('overlay2')
        cardBody5.className += ' overlay'
      }, 100)
    }
    vm.showPicture = () => {
      $timeout.cancel(vm.textShow)
      if (vm.text.length === 162) {
        return
      }
      vm.pictureShow = $timeout(() => {
        cardBody5.classList.remove('overlay')
        cardBody5.className += ' overlay2'
      }, 700)
    }
  }
})
