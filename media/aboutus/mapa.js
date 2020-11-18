function iniciarMap(){
    var coord = {lat:10.106365 ,lng:-84.252139};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 18,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}
// 10.106365, -84.252139
// AIzaSyBkkaYBtfMlFk457_o0LWTgJZVJGZE-bYY