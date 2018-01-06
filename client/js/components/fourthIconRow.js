angular.module('portfolio').component('fourthIconRow', {
  templateUrl: '/views/fourthIconRow.html',
  require: {
    parent: '^^pictures'
  },
  controller: function () {
    const vm = this
    vm.$onInit = async () => {
      const {getImageUrl} = vm.parent
      vm.cloudfrontUrl = await getImageUrl()
    }
  }
})
