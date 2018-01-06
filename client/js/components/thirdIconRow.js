angular.module('portfolio').component('thirdIconRow', {
  templateUrl: '/views/thirdIconRow.html',
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
