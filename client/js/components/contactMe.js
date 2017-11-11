angular.module('portfolio').component('contactMe', {
  templateUrl: '/views/contactMe.html',
  controller: function () {
    let vm = this
    vm.show = true
    vm.show2 = true
    vm.show3 = false
    vm.success1 = () => {
      vm.show = false
    };
    vm.fail1 = err => {
      console.error('Error!', err);
    };
    vm.success2 = () => {
      vm.show2 = false
    };
    vm.fail2 = err => {
      console.error('Error!', err);
    };
    vm.showMessage = () => {
      vm.show3 = true
    }
  }
})
