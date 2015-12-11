/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	// When I click on 'Portfolio':
	// - Hide 'about'
	// - Show 'portfolio'

	(function () {

	  var home = document.getElementById('home');
	  var portfolio = document.getElementById('portfolio');
	  var messages = document.getElementById('messages');
	  var blog = document.getElementById('blog');

	  var pages = [home, portfolio, messages, blog];

	  var portfolioButton = document.getElementById('portfolio-btn');

	  function hidePages(keepPage) {

	    for(var i = 0; i < pages.length; i++) {
	      if (pages[i] !== keepPage) {
	        pages[i].style.display = 'none';
	      }
	    }
	  
	  }

	  portfolioButton.addEventListener("click", function(e) {
	    e.preventDefault();

	    hidePages(portfolio);

	    console.log("Portfolio Appears!");
	  });

	})();


/***/ }
/******/ ]);