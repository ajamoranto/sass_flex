'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

var validate = require('gulp-w3c-css');
var gutil = require('gulp-util');
var path = require('path');

var htmlhint = require("gulp-htmlhint");

var srcPath = path.join(__dirname, './assets/*.css');
var dstPath = path.join(__dirname, './build');
 
gulp.task('cssVal', function(){
  gulp.src(srcPath)
  .pipe(validate())
  .pipe(gulp.dest(dstPath));
})


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

gulp.task('default', ['sass', 'htmlHint']);