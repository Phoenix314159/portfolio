angular.module('portfolio').component('feedbackCard', {
  templateUrl: '/views/feedback.html',
  require: {
    parent: '^^cardPictures'
  },
  controller: function (mainService, $interval, $timeout, $window) {
    const vm = this, {document} = $window,
      cardBody7 = document.getElementById('cardBody7'),
      getData = $timeout(async () => {
        const {feedbackText} = mainService, {data} = await feedbackText();
        vm.feedbackText = data.text[0].paragraph
        $timeout.cancel(getData)
      }, 800)
    vm.$onChanges = async () => {
      const images = await vm.parent.getImages()
      vm.feedbackImage = images[2]
    }
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
      if (vm.text.length !== 192) {
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
      if (vm.text.length === 192) {
        return
      }
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
