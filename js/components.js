Vue.component('img-profile',{
    template: '<span class="d-none d-lg-block">\n' +
    '          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="../images/profile.jpg" alt="">\n' +
    '          </span>\n'
});

Vue.component('my-data', {
    template: '<h1 class="mb-0">Damián<span class="text-primary">Ladiani</span></h1>'
});

Vue.component('my-info', {
    template: '<div class="subheading mb-5">Munro, Buenos Aires - Argentina - 15-5814-0669' +
    '<a href="mailto:damianladiani@gmail.com">damianladiani@gmail.com</a> </div>'
});

Vue.component('experience',{
    props: ['position','description','time','company'],
    template: '<div class="resume-item d-flex flex-column flex-md-row">\n' +
    '            <div class="resume-content mr-auto">\n' +
    '              <h3 class="mb-0">{{ position }}</h3>\n' +
    '              <div class="subheading mb-3">{{ company }}</div>\n' +
    '              <p>{{ description }}</p>\n' +
    '            </div>\n' +
    '            <div class="resume-date text-md-right">\n' +
    '              <span class="text-primary">{{ time }}</span>\n' +
    '            </div>\n' +
    '          </div>'
})

Vue.component('education',{
    props: ['university','career','time'],
    template: '<div class="resume-item d-flex flex-column flex-md-row">\n' +
    '              <div class="resume-content mr-auto">\n' +
    '                <h3 class="mb-0">{{ university }}</h3>\n' +
    '                <div class="subheading mb-3">{{ career }}</div>\n' +
    '              </div>\n' +
    '              <div class="resume-date text-md-right">\n' +
    '                <span class="text-primary">{{ time }}</span>\n' +
    '              </div>\n' +
    '            </div>'
});

Vue.component('my-skills', {
    template: '<ul class="fa-ul mb-0">\n' +
    '        <section style="width: 50%;margin: 0;padding: 0; float: left">\n' +
    '          <li>\n' +
    '            <i class="fa-li fa fa-check"></i>\n' +
    '            PHP ++++</li>\n' +
    '          <li>\n' +
    '            <i class="fa-li fa fa-check"></i>\n' +
    '            MYSQL ++++</li>\n' +
    '          <li>\n' +
    '            <i class="fa-li fa fa-check"></i>\n' +
    '            Linux ++++</li>\n' +
    '          <li>\n' +
    '            <i class="fa-li fa fa-check"></i>\n' +
    '            Laravel ++++\n' +
    '          </li>\n' +
    '          <li>\n' +
    '            <i class="fa-li fa fa-check"></i>\n' +
    '            Javascript +++\n' +
    '          </li>\n' +
    '          <li>\n' +
    '            <i class="fa-li fa fa-check"></i>\n' +
    '            Git +++\n' +
    '          </li>\n' +
    '          <li>\n' +
    '            <i class="fa-li fa fa-check"></i>\n' +
    '            JQuery ++++\n' +
    '          </li>\n' +
    '          <li>\n' +
    '            <i class="fa-li fa fa-check"></i>\n' +
    '            Vue.js ++</li>\n' +
    '        </section>\n' +
    '        <section style="width: 50%;margin: 0;padding: 0; float: left">\n' +
    '          <li>\n' +
    '            <i class="fa-li fa fa-check"></i>\n' +
    '            HTML5 +++</li>\n' +
    '          <li>\n' +
    '          <li>\n' +
    '            <i class="fa-li fa fa-check"></i>\n' +
    '            CSS3 +++</li>\n' +
    '          <li>\n' +
    '            <i class="fa-li fa fa-check"></i>\n' +
    '            Web Services API +++</li>\n' +
    '          <li>\n' +
    '            <i class="fa-li fa fa-check"></i>\n' +
    '            Responsive Design +++\n' +
    '          </li>\n' +
    '          <li>\n' +
    '            <i class="fa-li fa fa-check"></i>\n' +
    '            Bootstrap ++++\n' +
    '          </li>\n' +
    '          <li>\n' +
    '            <i class="fa-li fa fa-check"></i>\n' +
    '            Docker ++\n' +
    '          </li>\n' +
    '          <li>\n' +
    '            <i class="fa-li fa fa-check"></i>\n' +
    '            Scrum ++\n' +
    '          </li>\n' +
    '        </section>\n' +
    '      </ul>'
});

Vue.component('menu-item', {
    props: ['id','descripcion'],
    template: '<li class="nav-item"><a class="nav-link js-scroll-trigger" :href="id">{{ descripcion }}</a></li>'
});

Vue.component('social-media',{
   template: '<div class="social-icons">\n' +
   '            <a href="https://www.linkedin.com/in/damian-ladiani/" target="_blank">\n' +
   '              <i class="fab fa-linkedin-in"></i>\n' +
   '            </a>\n' +
   '            <a href="https://github.com/pollitofive" target="_blank">\n' +
   '              <i class="fab fa-github"></i>\n' +
   '            </a>\n' +
   '            <a href="https://www.facebook.com/ladianid" target="_blank">\n' +
   '              <i class="fab fa-facebook-f"></i>\n' +
   '            </a>\n' +
   '          </div>'
});

Vue.component('languages-tools',{
    template: '<ul class="list-inline dev-icons">\n' +
    '            <li class="list-inline-item">\n' +
    '              <i class="fab fa-php"></i>\n' +
    '            </li>\n' +
    '            <li class="list-inline-item">\n' +
    '              <i class="fab fa-laravel"></i>\n' +
    '            </li>\n' +
    '            <li class="list-inline-item">\n' +
    '              <i class="fab fa-html5"></i>\n' +
    '            </li>\n' +
    '            <li class="list-inline-item">\n' +
    '              <i class="fab fa-css3-alt"></i>\n' +
    '            </li>\n' +
    '            <li class="list-inline-item">\n' +
    '              <i class="fab fa-js"></i>\n' +
    '            </li>\n' +
    '            <li class="list-inline-item">\n' +
    '              <i class="fab fa-git"></i>\n' +
    '            </li>\n' +
    '            <li class="list-inline-item">\n' +
    '              <i class="fab fa-github"></i>\n' +
    '            </li>\n' +
    '            <li class="list-inline-item">\n' +
    '              <i class="fab fa-vuejs"></i>\n' +
    '            </li>\n' +
    '          </ul>'
})
