var gulp = require('gulp'),
    babel = require('gulp-babel'),
    connect = require('gulp-connect'),
    ghPages = require('gulp-gh-pages'),
    uglify = require('gulp-uglify');

gulp.task('dist', function () {
    return gulp.src('src/*')
        .pipe(babel())
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('deploy', function() {
    var files = [
        'index.html', 'dist/*', 'bower_components/**/*', '!bower_components/avatar-elements/**/*'
    ];

    return gulp.src(files, { base: './' })
        .pipe(ghPages({
            cacheDir: 'bower_components/avatar-elements'
        }));
});

gulp.task('server', function() {
    connect.server();
});

gulp.task('watch', function(){
    gulp.watch('src/*', ['dist']);
});

gulp.task('default', ['server', 'watch']);
