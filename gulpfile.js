const gulp = require('gulp'),
  {concat, cleanCss, sourcemaps: {init, write},
    babel, browser: {browserify}, sass,
    ngAnnotate, uglify, htmlmin, imagemin} = require('gulp-load-plugins')({
    pattern: ['gulp-*'],
    replaceString: /\bgulp[\-.]/,
    lazy: true,
    camelize: true
  }),
  transforms = [{
    transform: 'babelify'
  }],
  babelConfig = {
    presets: ['es2015', 'es2017'],
    plugins: ['transform-runtime']
  }

gulp.task('css', () => {
  return gulp.src('client/grayscale/css/*.css')
    .pipe(init())
    .pipe(concat('vendor.css'))
    .pipe(cleanCss({
      compatibility: 'ie8'
    }))
    .pipe(write('./'))
    .pipe(gulp.dest('dist/css'))
})

gulp.task('scss', () => {
  return gulp.src('client/scss/*.scss')
    .pipe(init())
    .pipe(sass()).on('error', sass.logError)
    .pipe(concat('main.css'))
    .pipe(cleanCss({
      compatibility: 'ie8'
    }))
    .pipe(write('./'))
    .pipe(gulp.dest('dist/css'))
})

gulp.task('js', () => {
  return gulp.src(['client/js/**/*.js', 'client/grayscale/js/*.js'])
    .pipe(init())
    .pipe(babel(babelConfig))
    .pipe(browserify(transforms))
    .pipe(concat('bundle.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(write('./'))
    .pipe(gulp.dest('dist/js'))
})

gulp.task('views', () => {
  return gulp.src('client/views/**')
    .pipe(htmlmin({
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
    // .pipe(imagemin())
    .pipe(gulp.dest('dist/imgs'))

  gulp.src(['client/icons/**'])
    // .pipe(imagemin())
    .pipe(gulp.dest('dist/icons'))

  gulp.src(['client/resume/**'])
    .pipe(gulp.dest('dist/resume'))
})

gulp.task('build', ['css', 'scss', 'js', 'views', 'copy'], () => {
  return gulp.src('client/index.html')
    .pipe(htmlmin({
      collapseWhitespace: true,
    }))
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', () => {
  return gulp.watch(['client/index.html', 'client/particles.json', 'client/js/**/*.js',
    'client/views/**', 'client/css/*.css', 'client/scss/*.scss'], ['build'])
})

gulp.task('default', ['build', 'watch'])


