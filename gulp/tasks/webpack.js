var gulp = require('gulp');
var config = require('../config').webpack;
var webpack = require('webpack-stream');

gulp.task('webpack', function(callback) {
  return gulp.src(config.entryPoint)
  .pipe(webpack( require('../../webpack.config.js') ))
  .pipe(gulp.dest(config.dest));
});
