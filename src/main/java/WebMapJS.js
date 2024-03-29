/*
 * Name: Addison Armstrong, Kayla Felderman, Nate Unruh, Ram Sajja
 * Name of Project: First Aid in Flight
 * Name of Class: WebMapJS
 * Description of Class: Back end code of the Webpage
 */


var map, infoWindow;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.66, lng: -91.54},
        zoom: 15
    });
    infoWindow = new google.maps.InfoWindow;

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            infoWindow.open(map);
            map.setCenter(pos);
        }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

function yesClick() {
    //call PatientRequest with location
    //probably not doing anything
    //java.PatientRequest = new java.PatientRequest(map.center);
    //console.log(java.PatientRequest);
    alert("Your Help is on the way! Hold it there.");
}

function noClick() {
    //prompt user input

}