const gulp = require('gulp');
const watch = require('gulp-watch');
const del = require('del');

gulp.task('static', () => {
    return watch([
        'app/**/*.css',
        'app/**/*.html',
    ], { ignoreInitial: false })
        .pipe(gulp.dest('dist'));
});

gulp.task('clean', () => {
    return del([`dist/**`]);
});