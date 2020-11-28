// Muestre solo el mapa
function iniciarMap2(){
    var coord = {lat:10.106365 ,lng:-84.252139};

    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 14,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}

function iniciarMap(){
  var dd = new google.maps.DirectionsRenderer();
  var ds = new google.maps.DirectionsService();


  var guatusa = new google.maps.LatLng(10.106365, -84.252139);
  if (navigator.geolocation) {
    var somewhere = navigator.geolocation.getCurrentPosition(function pos(position){
      var place = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      return place;
    });
  } else {
    var somewhere = new google.maps.LatLng(10.423129, -83.755066);
  }

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