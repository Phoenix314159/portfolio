angular.module('portfolio').component('bloggerCard', {
  templateUrl: '/views/blogger.html',
  require: {
    parent: '^^pictures'
  },
  controller: function (mainService, $interval, $timeout, $window) {
    const vm = this, {document} = $window,
      cardBody9 = document.getElementById('cardBody9'),
      getData = $timeout(async () => {
        const {bloggerText} = mainService,
          {data: {text}} = await bloggerText();
        vm.bloggerText = text[0].paragraph
        $timeout.cancel(getData)
      }, 900)

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
      if (vm.text.length !== 167) {
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
      if (vm.text.length === 167) {
        return
      }
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
