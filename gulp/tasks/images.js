var gulp = require('gulp');
var config = require('../config').images;
var flatten = require('gulp-flatten');

gulp.task('images', function() {
  return gulp.src(config.src)
  .pipe(flatten())
  .pipe(gulp.dest(config.dest));
});
