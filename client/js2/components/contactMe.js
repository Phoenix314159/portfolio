angular.module('portfolio').component('contactMe', {
  template: `<h2 class="wow animated fadeIn contactMe sectionFont">Contact</h2>
<hr/>
<ul class="list-inline banner-social-buttons flex socialButtons col-12">
    <li class="wow animated slideInLeft list-inline-item">
        <a href="https://www.linkedin.com/in/james-langford/"
           class="btn btn-custom btn-lg">
            <div class="contactButtons">
                <i class="fa fa-linkedin-square fa-fw"></i>
                <span class="network-name">Linkedin</span>
            </div>
        </a>
    </li>
    <li class="wow animated fadeIn list-inline-item">
        <button class="btn btn-custom btn-lg dude2"
                data-text-swap="derivative7117@gmail.com">
            <div class="contactButtons">
                <i class="fa fa-envelope fa-fw"></i>
                <span class="network-name">Gmail</span>
            </div>
        </button>
    </li>
    <li class="wow animated slideInRight list-inline-item">
        <button class="btn btn-custom btn-lg dude"
                data-text-swap="derivative7117@live.com">
            <div class="contactButtons">
                <i class="fa fa-envelope fa-fw"></i>
                <span class="network-name">MSN</span>
            </div>
        </button>
    </li>
</ul>
<div style="height:5vh"></div>
<ul class="list-inline banner-social-buttons resumeButtons">
    <li class="wow animated slideInLeft list-inline-item sheet">
        <a href="/resume/Resume.pdf"
           class="btn btn-custom btn-lg">
            <div class="contactButtons">
                <i class="fa fa-paper-plane fa-fw"></i>
                <span class="network-name">Resume</span>
            </div>
        </a>
    </li>
    <li class="wow animated slideInRight list-inline-item download2">
        <a href="/resume/Resume.pdf" download
           class="btn btn-custom btn-lg">
            <div class="contactButtons">
                <i class="fa fa-paper-plane fa-fw"></i>
                <span class="network-name">Resume (Download)</span>
            </div>
        </a>
    </li>
</ul>`
})
