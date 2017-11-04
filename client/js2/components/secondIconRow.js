angular.module('portfolio').component('secondIconRow', {
  template: `<div class="row heyman">
                    <div class="wow animated zoomInLeft col-3">
                        <img src="./icons/angular.png"
                             height="100" width="100"/>
                        <p class="tag">AngularJS</p></div>
                    <div class="wow animated zoomInDown col-3">
                        <img src="./icons/reactjsicon.png" height="100" width="100"/>
                        <p class="tag">ReactJS</p></div>
                    <div class="wow animated zoomInUp col-3">
                        <img src="./icons/redux.png" height="100" width="100"/>
                        <p class="tag">Redux</p></div>
                    <div class="wow animated zoomInRight col-3">
                        <img src="icons/node_js.png"
                             height="100" width="100"/>
                        <p class="tag">NodeJS</p>
                    </div>
                </div>`
})
