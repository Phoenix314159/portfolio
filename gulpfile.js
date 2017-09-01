const gulp = require('gulp'),
    $ = require('gulp-load-plugins')({
        pattern: ['gulp-*'],
        replaceString: /\bgulp[\-.]/,
        lazy: true,
        camelize: true
    }),
    cachebust = new $.cachebust(),
    browserSync = require('browser-sync').create(),
    pkg = require('./package.json');

// Set the banner content
var banner = ['/*!\n',
    ' * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
    ' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
    ' * Licensed under <%= pkg.license.type %> (<%= pkg.license.url %>)\n',
    ' */\n',
    ''
].join('');

// Compile LESS files from /less into /css
gulp.task('less', function() {
    var f = $.filter(['*', '!mixins.less', '!variables.less']);
    return gulp.src('less/*.less')
        .pipe(f)
        .pipe($.less())
        .pipe($.header(banner, { pkg: pkg }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});
gulp.task('images', () =>
    gulp.src('./client/imgs/*')
        .pipe($.imagemin())
        .pipe(gulp.dest('dist/imgs'))
);
gulp.task('icons', () =>
    gulp.src('./client/icons/*')
        .pipe($.imagemin())
        .pipe(gulp.dest('dist/icons'))
);
// Minify compiled CSS
gulp.task('minify-css', ['less'], function() {

    return gulp.src('./client/style/main.css')
        .pipe($.cleanCss({ compatibility: 'ie8' }))
        .pipe($.rename({ suffix: '.min' }))
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe(gulp.dest('./dist/css'))
});

// Minify JS
gulp.task('minify-js', function() {
    return gulp.src('js/freelancer.js')
        .pipe($.uglify())
        .pipe($.header(banner, { pkg: pkg }))
        .pipe($.rename({ suffix: '.min' }))
        .pipe(gulp.dest('js'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('copy', function() {
    gulp.src(['node_modules/bootstrap/dist/**/*', '!**/npm.js', '!**/bootstrap-theme.*', '!**/*.map'])
        .pipe(gulp.dest('./dist/vendor/bootstrap'))

    gulp.src(['./client/imgs/**'])
        .pipe(gulp.dest('./dist/imgs'))

    gulp.src(['./client/css/**'])
        .pipe(gulp.dest('./dist/css'))

    gulp.src(['./client/icons/**'])
        .pipe(gulp.dest('./dist/icons'))

    gulp.src(['node_modules/jquery/dist/jquery.js', 'node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('./dist/vendor/jquery'))

    gulp.src([
            'node_modules/font-awesome/**',
            '!node_modules/font-awesome/**/*.map',
            '!node_modules/font-awesome/.npmignore',
            '!node_modules/font-awesome/*.txt',
            '!node_modules/font-awesome/*.md',
            '!node_modules/font-awesome/*.json'
        ])
        .pipe(gulp.dest('./dist/vendor/font-awesome'))
})



// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        },
    })
})

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'less', 'minify-css', 'minify-js'], function() {
    gulp.watch('less/*.less', ['less']);
    gulp.watch('css/*.css', ['minify-css']);
    gulp.watch('js/*.js', ['minify-js']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
});

gulp.task('build', ['minify-css', 'less', 'minify-css', 'minify-js', 'images','icons', 'copy'], () => {
    return gulp.src('./client/index.html')
        .pipe(cachebust.references())
        .pipe($.htmlmin({
            collapseWhitespace: true,
        }))
        .pipe(gulp.dest('./dist'))
});

gulp.task('watch', () => {
    return gulp.watch(['./client/index.html', './client/js/**/*.js', './client/styles/*.css'], ['build']);
});
// Run everything
gulp.task('default', ['build', 'watch']);
