var gulp = require('gulp'),
    pug = require('gulp-pug'),
    rename = require('gulp-rename'),
    replace = require('gulp-replace');

gulp.task('default', () => {
    return gulp.src(['./*.pug'], { base: './' })
        .pipe(pug({
            pretty: true
        }))
        .pipe(replace(/cond=\"([^\"]*?)\"/g, "cond='$1'"))
        .pipe(replace(/value=\"([^\"]*?)\"/g, "value='$1'"))
        .pipe(replace(/expr:([a-zA-Z]+?)="([^\"]*?)\"/g, "expr:$1='$2'"))
        .pipe(replace(/&amp;/g, '&'))
        .pipe(replace(/&quot;/g, '"'))
        .pipe(rename({ extname: '.xml' }))
        .pipe(gulp.dest('./dist/'));
});
