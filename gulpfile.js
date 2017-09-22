'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

var htmlhint = require("gulp-htmlhint");

gulp.task('htmlHint', function(){
    gulp.src("./*.html")
    .pipe(htmlhint())
});


gulp.task('sass', function() {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./assets/stylesheets/'));
});

gulp.task('watch', function () {
  gulp.watch('./assets/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch', 'htmlHint']);