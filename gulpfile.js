const gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*'],
        replaceString: /\bgulp[\-.]/,
        lazy: true,
        camelize: true
    });

// Set the banner content
var banner = ['/*!\n',
    ' * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
    ' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
    ' * Licensed under <%= pkg.license %> (https://github.com/BlackrockDigital/<%= pkg.name %>/blob/master/LICENSE)\n',
    ' */\n',
    ''
].join('');

// Compiles SCSS files from /scss into /css
// gulp.task('sass', function() {
//   return gulp.src('client/scss/grayscale.scss')
//     .pipe($.sass())
//       .pipe(gulp.dest('css'))
//
// });

// Minify compiled CSS
gulp.task('minify-css', function () {
    return gulp.src('./client/css/*.css')
        .pipe($.concat('main.css'))
        .pipe($.cleanCss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('dist/css'))
});

// Minify custom JS
gulp.task('minify-js', function () {
    return gulp.src('client/js/*.js')
        .pipe($.uglify())
        .pipe($.concat('bundle.js'))
        .pipe(gulp.dest('dist/js'))
});

// Copy vendor files from /node_modules into /vendor
// NOTE: requires `npm install` before running!
gulp.task('copy', function () {
    gulp.src([
        'node_modules/bootstrap/dist/**/*',
        '!**/npm.js',
        '!**/bootstrap-theme.*',
        '!**/*.map'
    ])
        // .pipe(gulp.dest('dist/vendor/bootstrap'))

    // gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
    //     .pipe(gulp.dest('dist/vendor/jquery'))
    //
    // gulp.src(['node_modules/popper.js/dist/umd/popper.js', 'node_modules/popper.js/dist/umd/popper.min.js'])
    //     .pipe(gulp.dest('dist/vendor/popper'))
    //
    // gulp.src(['node_modules/jquery.easing/*.js'])
    //     .pipe(gulp.dest('dist/vendor/jquery-easing'))

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


gulp.task('build', ['minify-css', 'minify-js', 'copy'], () => {
    return gulp.src('./client/index.html')
        .pipe($.htmlmin({
            collapseWhitespace: true,
        }))
        .pipe(gulp.dest('dist'))
});

gulp.task('watch', () => {
    return gulp.watch(['./client/index.html', './client/css/*.css'], ['build']);
});

// Default task
gulp.task('default', ['build', 'watch']);


// Dev task with browserSync
// gulp.task('dev', ['browserSync', 'sass', 'minify-css', 'minify-js'], function() {
//   gulp.watch('scss/*.scss', ['sass']);
//   gulp.watch('css/*.css', ['minify-css']);
//   gulp.watch('js/*.js', ['minify-js']);
//   // Reloads the browser whenever HTML or JS files change
//   gulp.watch('*.html', browserSync.reload);
//   gulp.watch('js/**/*.js', browserSync.reload);
// });
