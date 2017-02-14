// Imports
var del = require('del');
var gulp = require('gulp');
var less = require('gulp-less');

// Specify paths
var paths = {
    css: {
        src: './less/styles.less',
        watch: './less/**/*',
        dest: './public/css',
    }
}

// Define css gulp tasks
gulp.task('css-clean', function () {
    return del(paths.css.dest + '/**/*');
});

gulp.task('css-build', ['css-clean'], function () {
    return gulp.src(paths.css.src)
        .pipe(less())
        .pipe(gulp.dest(paths.css.dest));
});

gulp.task('css-watch', function() {
    return gulp.watch(paths.css.watch, ['css-build']);
});

gulp.task('css', ['css-build']);

// Define general tasks
gulp.task('default', ['css']);
gulp.task('watch', ['css-watch']);
