angular.module('portfolio').component('secondIconRow', {
  templateUrl: '/views/secondIconRow.html',
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
