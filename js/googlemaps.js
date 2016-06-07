var env = require('../config/environment');

(function() {
  var lat = $("#map").data("lat");
  var lng = $("#map").data("lng");
  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 8,
      center: {lat: parseFloat(lat), lng: parseFloat(lng)}
    });
  }

  function loadGoogle() {
    var mapsScript = document.createElement('script');
    var apiKey = env.googleKey;
    mapsScript.src = '//maps.googleapis.com/maps/api/js?key=' + apiKey;
    mapsScript.async = true;
    document.body.appendChild(mapsScript);
  }

  loadGoogle();
})();
