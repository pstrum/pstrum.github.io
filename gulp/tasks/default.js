var gulp = require('gulp');

// Define the default task and an array of tasks to be executed and completed before the default task will run
gulp.task('default', ['serve', 'html', 'blog', 'portfolio', 'sass', 'images', 'fonts', 'icons', 'webpack', 'watch']);
