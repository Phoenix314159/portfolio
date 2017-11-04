const gulp = require('gulp'),
  $ = require('gulp-load-plugins')({
    pattern: ['gulp-*'],
    replaceString: /\bgulp[\-.]/,
    lazy: true,
    camelize: true
  }),
  transforms = [{
    transform: "babelify",
    options: {presets: ["es2015"]}
  }];


var banner = ['/*!\n',
  ' * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
  ' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' * Licensed under <%= pkg.license %> (https://github.com/BlackrockDigital/<%= pkg.name %>/blob/master/LICENSE)\n',
  ' */\n',
  ''
].join('')

gulp.task('minify-css', function () {
  return gulp.src('./client/css/*.css')
    .pipe($.concat('main.css'))
    .pipe($.cleanCss({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist/css'))
})

gulp.task('minify1-js', function () {
  return gulp.src('client/js2/**/*.js')
    .pipe($.sourcemaps.init())
    .pipe($.browser.browserify(transforms))
    .pipe($.concat('bundle.js'))
    .pipe($.ngAnnotate())
    .pipe($.uglify())
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js2'))
})
gulp.task('minify2-js', function () {
  return gulp.src('client/js/*.js')
    .pipe($.uglify())
    .pipe($.concat('bundle.js'))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('copy', function () {
  gulp.src([
    'node_modules/bootstrap/dist/**/*',
    '!**/npm.js',
    '!**/bootstrap-theme.*',
    '!**/*.map'
  ])

  gulp.src([
    'node_modules/font-awesome/**',
    '!node_modules/font-awesome/**/*.map',
    '!node_modules/font-awesome/.npmignore',
    '!node_modules/font-awesome/*.txt',
    '!node_modules/font-awesome/*.md',
    '!node_modules/font-awesome/*.json'
  ])
    .pipe(gulp.dest('dist/vendor/font-awesome'))

  gulp.src(['./imgs/**'])
    .pipe(gulp.dest('dist/imgs'))

  gulp.src(['./icons/**'])
    .pipe(gulp.dest('dist/icons'))

  gulp.src(['./img/**'])
    .pipe(gulp.dest('dist/img'))

  gulp.src(['./resume/**'])
    .pipe(gulp.dest('dist/resume'))
})

gulp.task('build', ['minify-css', 'minify1-js', 'minify2-js', 'copy'], () => {
  return gulp.src('./client/index.html')
    .pipe($.htmlmin({
      collapseWhitespace: true,
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', () => {
  return gulp.watch(['./client/index.html', './client/js2/**/*.js', './client/css/*.css'], ['build'])
})


gulp.task('default', ['build', 'watch'])


