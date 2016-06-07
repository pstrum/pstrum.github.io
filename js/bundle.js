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
	__webpack_require__(2);
	__webpack_require__(3);


/***/ },
/* 1 */
/***/ function(module, exports) {

	(function() {
	  $(".sub-post button").click(function() {
	    $(this).find(".scroll-top").addClass("to-top");
	    $("html, body").delay(500).animate( {
	      scrollTop: 0
	    }, 500, function() {
	      $(".scroll-top").removeClass("to-top");
	    });
	  });
	})();



/***/ },
/* 2 */
/***/ function(module, exports) {

	(function() {
	  "use strict";

	  $(".scroll-links a").click(function(e) {

	    e.preventDefault();

	    var toWhere = $(this).attr("href");

	    if (toWhere == "#contact-links") {

	      $("html, body").animate( {
	        scrollTop: $(toWhere).offset().top
	      }, 300);

	      $(".social-links").addClass("active-links");

	      delayScroll();

	    } else {

	      $("html, body").animate( {
	        scrollTop: $(toWhere).offset().top
	      }, 300);

	    }
	    return false;
	  });

	  function delayScroll() {
	    window.setTimeout(function(){
	      $(window).scroll(function(event) {

	        $(".social-links").removeClass("active-links");
	        $(window).off('scroll');
	      });

	    }, 500);
	  }

	})();


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var env = __webpack_require__(4);

	(function() {

	  var lat = $("#map").data("lat");
	  var lng = $("#map").data("lng");

	  window.initMap = function() {
	    console.log("yolo");
	    var map = new google.maps.Map(document.getElementById('map'), {
	      zoom: 15,
	      center: {lat: parseFloat(lat), lng: parseFloat(lng)},
	      disableDefaultUI: true,
	      draggable: false,
	      scrollwheel: false
	    });
	    var geocoder = new google.maps.Geocoder;
	    geocodeLatLng(geocoder, map);
	    google.maps.event.addDomListener(window, "resize", function() {
	      var center = map.getCenter();
	      google.maps.event.trigger(map, "resize");
	      map.setCenter(center); 
	    });
	  };

	  function loadGoogle() {
	    var mapsScript = document.createElement('script');
	    var apiKey = env.googleKey;
	    mapsScript.src = '//maps.googleapis.com/maps/api/js?key=' + apiKey + '&callback=window.initMap';
	    mapsScript.async = true;
	    document.body.appendChild(mapsScript);
	  }

	  function geocodeLatLng(geocoder, map) {
	    var latlng = {lat: parseFloat(lat), lng: parseFloat(lng)};
	    geocoder.geocode({'location': latlng}, function(results, status) {
	      if (status === google.maps.GeocoderStatus.OK) {
	        if (results[1]) {
	          map.setZoom(15);
	          var marker = new google.maps.Marker({
	            position: latlng,
	            map: map,
	            icon: '/icons/location.svg'
	          });
	        } else {
	          window.alert('No results found');
	        }
	      } else {
	        window.alert('Geocoder failed due to: ' + status);
	      }
	    });
	  }

	  loadGoogle();

	})();



/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = {
	  googleKey: 'AIzaSyBqmF71sk9AOaG3lfdKJlwyB81plCq6onk',
	};


/***/ }
/******/ ]);