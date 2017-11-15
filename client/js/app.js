angular.module('portfolio', ['angular-parallax', 'ngAnimate', 'ngclipboard'])
  .component('cardPictures', {
    controller: function ($http) {
      const vm = this
      vm.data = $http.get('/api/get_images')
      vm.$onInit = () => {
        vm.getImages = async () => {
          const {data} = await vm.data
          return data
        }
      }
    }
  })


