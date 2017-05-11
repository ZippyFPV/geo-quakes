// define globals
var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson";
var map;

$(document).on("ready", function() {
  // function getData() {
  initMap();
  $.ajax({
  method: "GET",
  url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson",
  data: $("FeatureCollection").serialize(),
  success: onSuccess,
  error: onError
  });



});
  // };






  function onSuccess(json) {
    console.log(json.features);
    for (var i = 0; i<json.features.length; i++){
      var quake = json.features[i];
      $("#info").append("<p>"+ quake.properties.place +"</p>");

  var lat = json.features[i].geometry.coordinates[1]
    var lng = json.features[i].geometry.coordinates[0]

      var latLng = {lat: lat, lng: lng};
      var marker = new google.maps.Marker({

        // TODO: put stuff here
        position: {lat: lat, lng: lng},
        map: map
      })

     }
      // $("#info").append("<p>"+ quake.geometry.coordinates +"</p>");
    };







  function onError(xhr, status, errorThrown) {
  	alert("Sorry, there was a problem!");
  	console.log("Error: " + errorThrown);
  	console.log("Status: " + status);
  	console.dir(xhr);
  }

  function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 30.2682, lng: -97.74295},
      zoom: 8
    });

    var marker = new google.maps.Marker ({
      position: {lat: 30.2682, lng: -97.74295},
      map: map
    });
  }
