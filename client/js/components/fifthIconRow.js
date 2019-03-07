angular.module('portfolio').component('fifthIconRow', {
  templateUrl: '/views/fifthIconRow.html',
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
