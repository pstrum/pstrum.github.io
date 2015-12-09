var gulp = require('gulp');
var config = require('../config');

gulp.task('html', function() {
  return gulp.src(config.html.src)
  .pipe(gulp.dest(config.html.dest));
});

gulp.task('blog', function() {
  return gulp.src(config.blog.src)
  .pipe(gulp.dest(config.blog.dest));
});

gulp.task('portfolio', function() {
  return gulp.src(config.portfolio.src)
  .pipe(gulp.dest(config.portfolio.dest));
});
