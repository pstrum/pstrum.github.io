// Require Express Module
var express = require('express');

// Call the express function to create the application
var app = express(); 

// Set port = the user environment object PORT, or 8000
var port = process.env.PORT || 8000; 

// (app.use accesses built in middleware)
// Serve the static assets (Express' only middleware)
// Define the root as the name of the current directory the script is in
app.use(express.static(__dirname + '/build/'));

// Use the http server and client, return a new instance of http.server
var server = require('http').createServer(app);

// Begin accepting connections on the specified port and hostname
server.listen(port);
console.log("It's really happening... on port " + port);
