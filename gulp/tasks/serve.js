var gulp = require('gulp');
var config = require('../config').server;
var server = require('gulp-express');

// Gulp task method defines a task
// and function to perform that task's operations
gulp.task('serve', function() {
  // Use the run method of gulp-express module
  // Pass in an array with the serverFile prop
  server.run([config.serverFile]);
});
