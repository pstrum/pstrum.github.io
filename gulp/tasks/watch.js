var gulp = require('gulp');
var config = require('../config');
var server = require('gulp-express');

gulp.task('watch', function() {
  gulp.watch(config.html.src, ['html']);
  gulp.watch(config.blog.src, ['blog']);
  gulp.watch(config.projects.src, ['projects']);
  gulp.watch(config.sass.src, ['sass']);
  gulp.watch(config.images.src, ['images']);
  gulp.watch(config.fonts.src, ['fonts']);
  gulp.watch(config.icons.src, ['icons']);
  gulp.watch(config.webpack.src, ['webpack']);
  gulp.watch(config.server.serverFile, [server.run]);
});
