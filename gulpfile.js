'use strict'

const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

gulp.task('build', function() {
  return gulp.src(['./app/**/*.js'])
  .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./public/'))
    .pipe(rename('app.min.js'))
    .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./public/'));
});
