angular.module('portfolio').component('solarCard', {
template: ` <div class="wow animated slideInRight col-sm-4 portfolio-item card">
                <h4 class="card-title solar">The Solar System</h4>
                <div class="imgWrapper">
                    <img class="img-responsive center-block"
                         src="./imgs/screencapture-phoenix314159-github-io-solar-system-1494869698109.png"
                         style="height: 240px"/>
                </div>
                <div class="card-body overlay">
                    <div ng-show="$ctrl.show" class="textButton">
                        <button class="btn btn-custom btn-xs"  ng-click="$ctrl.displayText()">
                          <div class="text48">Show Info</div>
                        </button>
                    </div>
                    <div class="card-text">
                        <div class="text23">
                        {{$ctrl.text}}
                        </div>
                    </div>
                    <div class="links26">
                     <div class="links25">
                        <div class="githubLink">
                            <a href="http://13.56.178.219:3023" class="portfolio-link btn btn-custom btn-xs">Website</a>
                        </div>
                        <span class="githubLink">
                                <a href="https://github.com/Phoenix314159/the-solar-system" class="btn btn-custom btn-xs">Github</a>
                        </span>
                    </div>
                    </div>
                   
                </div>
            </div>`,
  controller: function (mainService, $interval, $timeout) {
    let vm = this;
    vm.text = '';
    vm.show = true
    vm.displayText = () => {
      vm.show = false
      vm.index = 0;
      vm.solarText = mainService.solarText();
      $interval(() => {
        $timeout(() => {
          vm.text += vm.solarText[vm.index];
          vm.index++;
        }, 500)
      }, 25, vm.solarText.length);
    }
  }
})