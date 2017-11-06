const gulp = require('gulp'),
  $ = require('gulp-load-plugins')({
    pattern: ['gulp-*'],
    replaceString: /\bgulp[\-.]/,
    lazy: true,
    camelize: true
  }),
  transforms = [{
    transform: 'babelify',
    options: {presets: ['es2015', 'es2017']}
  }]

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
    .pipe($.sourcemaps.init())
    .pipe($.uglify())
    .pipe($.concat('bundle.js'))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('views', function () {
  return gulp.src('client/views/**')
    .pipe($.htmlmin({
      collapseWhitespace: true,
    }))
    .pipe(gulp.dest('dist/views'))
})

gulp.task('copy', function () {

  gulp.src(['client/fonts/**'])
    .pipe(gulp.dest('dist/fonts'))

  gulp.src(['client/imgs/**'])
    .pipe(gulp.dest('dist/imgs'))

  gulp.src(['client/icons/**'])
    .pipe(gulp.dest('dist/icons'))

  gulp.src(['client/resume/**'])
    .pipe(gulp.dest('dist/resume'))
})

gulp.task('build', ['minify-css', 'minify1-js', 'minify2-js', 'views', 'copy'], () => {
  return gulp.src('./client/index.html')
    .pipe($.htmlmin({
      collapseWhitespace: true,
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', () => {
  return gulp.watch(['./client/index.html', './client/js2/**/*.js', './client/js/*.js', './client/views/**', './client/css/*.css'], ['build'])
})

gulp.task('default', ['build', 'watch'])


