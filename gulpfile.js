var gulp = require('gulp'),
    connect = require('gulp-connect'),
    ghPages = require('gulp-gh-pages');

gulp.task('deploy', function() {
    var files = [
        'index.html', './src/*', './bower_components/**/*', '!bower_components/avatar-elements/**/*'
    ];

    return gulp.src(files, { base: './' })
        .pipe(ghPages({
            cacheDir: 'bower_components/avatar-elements'
        }));
});

gulp.task('server', function() {
    connect.server();
});
