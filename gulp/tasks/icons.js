var gulp = require('gulp');
var config = require('../config').icons;
var flatten = require('gulp-flatten');

gulp.task('icons', function() {
  return gulp.src(config.src)
  .pipe(flatten())
  .pipe(gulp.dest(config.dest));
});
