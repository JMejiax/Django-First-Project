function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(iniciarMap);
  }
}


function iniciarMap(position){
  var dd = new google.maps.DirectionsRenderer();
  var ds = new google.maps.DirectionsService();


  var guatusa = new google.maps.LatLng(10.106365, -84.252139);
  var somewhere = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
  console.log(position.coords.latitude, position.coords.longitude)
  // var somewhere = new google.maps.LatLng(10.423129, -83.755066);

  var options = {
    zoom: 14,
    cender: guatusa
  };

  map = new google.maps.Map(document.getElementById('map'), options)
  dd.setMap(map);

  var request = {
    origin: guatusa,
    destination: somewhere,
    travelMode: "DRIVING"
  }

  ds.route(request, function(result, status){
    if(status == "OK"){
      dd.setDirections(result);
    }
  });
}

// 10.106365, -84.252139
// 10.423129, -83.755066
// AIzaSyBkkaYBtfMlFk457_o0LWTgJZVJGZE-bYY