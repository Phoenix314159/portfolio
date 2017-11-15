angular.module('portfolio', ['angular-parallax', 'ngAnimate', 'ngclipboard'])
  .component('cardPictures', {
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


