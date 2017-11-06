angular.module('portfolio').component('bloggerCard', {
  template: `<div class="wow animated rotateInUpRight col-sm-4 portfolio-item card">
                <h4 class="card-title">Blogger</h4>
                <div class="imgWrapper">
                    <img class="img-responsive" src="./imgs/blogging.png" style="height: 240px"/>
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
                               <a href="http://13.56.178.219:4124"
                                  class="portfolio-link btn btn-custom btn-xs">Website</a>
                            </div>
                            <span class="githubLink">
                               <a href="https://github.com/Phoenix314159/blogging-app" class="btn btn-custom btn-xs">Github</a>
                            </span>
                       </div>
                    </div>
                   
                </div>
            </div>`,
  controller: function (mainService, $interval, $timeout) {
    let vm = this
    vm.text = ''
    vm.show = true
    mainService.bloggerText().then(res => {
      vm.bloggerText = res.data.text[0].paragraph
    })
    vm.displayText = () => {
      vm.show = false
      vm.index = 0
      let textAnim = $interval(() => {
        if (vm.index !== 164) {
          $timeout(() => {
            vm.text += vm.bloggerText[vm.index]
            vm.index++
          }, 70)
        } else {
          $interval.cancel(textAnim)
        }
      }, 20)
    }
  }
})
