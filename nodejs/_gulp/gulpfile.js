var gulp = require('gulp');

gulp.task('default', function () {
    console.log("hello gulp ~!")
});

//====================================

var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('compress', function (cb) {
    pump([
            gulp.src('script/*.js'),
            uglify(),
            gulp.dest('dist')
        ],
        cb
    );
});

//====================================

var jshint = require('gulp-jshint');

gulp.task('lint', function () {
    return gulp.src('script/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

//====================================

var htmlmin = require('gulp-htmlmin');

gulp.task('minify', function() {
  return gulp.src('html/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'));
});

//====================================

var del = require('del');

gulp.task('clean', function () {
  return del(['dist']);
});

//====================================

gulp.task('run-all-task',["default","clean","compress","lint","minify"]);