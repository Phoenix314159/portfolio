angular.module('portfolio').component('aboutMe', {
  template: `<div class="container">
             <div class="row">
             <div class="col-lg-8 mx-auto">
                <h2 class="wow animated fadeIn sectionFont">About </h2>
                <hr class="projectsLine"/>
                <p class="wow animated slideInLeft text45">{{$ctrl.aboutMeText1}}</p>
                <p class="wow animated slideInRight text45"> {{$ctrl.aboutMeText2}}</p>
              </div>
          </div>
      </div>`,

  controller: function (mainService, $http) {
    let vm = this
    vm.aboutMeText1 = mainService.aboutMeText1()
    vm.aboutMeText2 = mainService.aboutMeText2()
    vm.dude =  () => {
      $http.get('https://swapi.co/api/people/1/').then(res => {
        console.log(res)
      })
    }
    vm.dude()
  }
})
