// Auto require all files
var requireTasks = require('require-dir');

// Require all tasks in gulp/tasks/*
requireTasks('./gulp/tasks', { recurse: true });
