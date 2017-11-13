const gulp = require('gulp'),
  $ = require('gulp-load-plugins')({
    pattern: ['gulp-*'],
    replaceString: /\bgulp[\-.]/,
    lazy: true,
    camelize: true
  })
transforms = [{
  transform: 'babelify'
}]
babelConfig = {
  presets: ['es2015', 'es2017'],
  plugins: ['transform-runtime']
}

gulp.task('minify-css', () => {
  return gulp.src('./client/css/*.css')
    .pipe($.concat('main.css'))
    .pipe($.cleanCss({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist/css'))
})

gulp.task('minify1-js', () => {
  return gulp.src('client/js/**/*.js')
    .pipe($.sourcemaps.init())
    .pipe($.babel(babelConfig))
    .pipe($.browser.browserify(transforms))
    .pipe($.concat('bundle.js'))
    .pipe($.ngAnnotate())
    .pipe($.uglify())
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('minify2-js', () => {
  return gulp.src('client/grayscale/*.js')
    .pipe($.sourcemaps.init())
    .pipe($.uglify())
    .pipe($.concat('bundle2.js'))
    .pipe($.sourcemaps.write('./'))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('views', () => {
  return gulp.src('client/views/**')
    .pipe($.htmlmin({
      collapseWhitespace: true,
    }))
    .pipe(gulp.dest('dist/views'))
})

gulp.task('copy', () => {

  gulp.src(['client/particles.json'])
    .pipe(gulp.dest('dist'))

  gulp.src(['client/fonts/**'])
    .pipe(gulp.dest('dist/fonts'))

  gulp.src(['client/imgs/**'])
    // .pipe($.imagemin())
    .pipe(gulp.dest('dist/imgs'))

  gulp.src(['client/icons/**'])
    // .pipe($.imagemin())
    .pipe(gulp.dest('dist/icons'))

  gulp.src(['client/resume/**'])
    .pipe(gulp.dest('dist/resume'))
})

gulp.task('build', ['minify-css', 'minify1-js', 'minify2-js', 'views', 'copy'], () => {
  return gulp.src('client/index.html')
    .pipe($.htmlmin({
      collapseWhitespace: true,
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', () => {
  return gulp.watch(['client/index.html', 'client/particles.json', 'client/js/**/*.js',
    'client/views/**', 'client/css/*.css'], ['build'])
})

gulp.task('default', ['build', 'watch'])


