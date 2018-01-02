angular.module('portfolio').component('starWarsCard', {
  templateUrl: '/views/starWars.html',
  require: {
    parent: '^^pictures'
  },
  controller: function (mainService, $interval, $timeout, $window) {
    const vm = this, {document} = $window,
      cardBody11 = document.getElementById('cardBody11'),
      getData = $timeout(async () => {
        const {starWarsText} = mainService,
          {data: {text}} = await starWarsText();
        vm.starWarsText = text[0].paragraph
        $timeout.cancel(getData)
      }, 700)

    vm.$onInit = async () => {
      const {getImageUrl} = vm.parent
      vm.cloudfrontUrl = await getImageUrl()
    }
    vm.show = true
    vm.showButtons = false
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      vm.text = ''
      vm.display = $timeout(() => {
        vm.textAnim = $interval(() => {
          if (vm.text.length === 180) {
            vm.stopText()
            vm.showButtons = true
          } else {
            vm.text += vm.starWarsText[vm.index]
            vm.index++
          }
        }, 15)
      }, 300)
    }
    vm.stopText = () => {
      $timeout.cancel(vm.display)
      $interval.cancel(vm.textAnim)
      if (vm.text.length !== 180) {
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
      if (vm.text.length === 180) {
        return
      }
      vm.textShow = $timeout(() => {
        cardBody11.classList.remove('overlay2')
        cardBody11.className += ' overlay'
      }, 100)
    }
    vm.showPicture = () => {
      $timeout.cancel(vm.textShow)
      if (vm.text.length === 180) {
        return
      }
      vm.pictureShow = $timeout(() => {
        cardBody11.classList.remove('overlay')
        cardBody11.className += ' overlay2'
      }, 700)
    }
  }
})

