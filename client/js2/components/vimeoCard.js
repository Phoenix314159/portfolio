angular.module('portfolio').component('vimeoCard', {
  template: ` <div class="wow animated zoomInDown col-sm-4 portfolio-item card">
                <h4 class="card-title">Vimeo Clone</h4>
                <div class="imgWrapper">
                    <img src="./imgs/screencapture-vimeoclone-1496882949876 (1).png" class="img-fluid center-block"
                         style="height: 240px" alt="">
                </div>
                <div class="card-body overlay">
                    <div class="card-text">
                        <div class="text23">
                            {{$ctrl.text}}
                         </div>
                    </div>
                        <div ng-show="$ctrl.show" class="textButton">
                            <button class="btn btn-custom btn-xs"  ng-click="$ctrl.displayText()">
                              <div class="text48">Show Info</div>
                            </button>
                        </div>
                    <div class="links26">
                    <div class="links25">
                        <div class="githubLink">
                            <a href="http://www.vimeoclone.com" class="portfolio-link btn btn-custom btn-xs">Website</a>
                        </div>
                        <span class="githubLink">
                                <a href="https://github.com/DM21-Project/DM21-Group" class="btn btn-custom btn-xs">Github</a>
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
      vm.vimeoText = mainService.vimeoText();
      $interval(() => {
        $timeout(() => {
          vm.text += vm.vimeoText[vm.index];
          vm.index++;
        }, 500)
      }, 25, vm.vimeoText.length);
    }
  }
})