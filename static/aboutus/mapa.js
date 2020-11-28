function iniciarMap(){
    var coord = {lat:10.106365 ,lng:-84.252139};
    var coord2 = {lat:10.423129 ,lng:-83.755066};

    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 14,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });

    var marker2 = new google.maps.Marker({
      position: coord2,
      map: map
    });

    ruta(marker, marker2);
}

function ruta(from, to){

  var dd = new google.maps.DirectionsRenderer();
  var ds = new google.maps.DirectionsService();

  var request = {
    origin: from,
    destination: to,
    travelMode: "DRIVING"
  }

  ds.route(request, function(result, status){
    if(status == "OK"){
      dd.setDirections(result);
    }
  });

}
// 10.106365, -84.252139
// AIzaSyBkkaYBtfMlFk457_o0LWTgJZVJGZE-bYY