angular.module('portfolio').component('firstIconRow', {
  templateUrl: '/views/firstIconRow.html',
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
