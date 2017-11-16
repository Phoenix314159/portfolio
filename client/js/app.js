angular.module('portfolio', ['ngAnimate', 'ngclipboard'])
  .component('pictures', {
    controller: function ($http) {
      const vm = this
      vm.url = $http.get('/api/get_images')
      vm.$onInit = () => {
        vm.getImageUrl = async () => {
          const {data} = await vm.url
          return data
        }
      }
    }
  })


