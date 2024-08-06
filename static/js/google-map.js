function initMap() {
    var myLatlng = new google.maps.LatLng(40.69847032728747, -73.9514422416687);

    var mapOptions = {
        zoom: 7,
        center: myLatlng,
        scrollwheel: false,
        styles: [
            {
                "featureType": "administrative.country",
                "elementType": "geometry",
                "stylers": [
                    { "visibility": "simplified" },
                    { "hue": "#ff0000" }
                ]
            }
        ]
    };

    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);

    var addresses = ['New York'];
    var apiKey = AIzaSyDiyFLkLTpV7X3VX-nuzJpaCwPGVB5dodo; // Ensure to replace with your valid key

    addresses.forEach(function(address) {
        var geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
        
        fetch(geocodeUrl)
            .then(response => response.json())
            .then(data => {
                var p = data.results[0].geometry.location;
                var latlng = new google.maps.LatLng(p.lat, p.lng);
                new google.maps.Marker({
                    position: latlng,
                    map: map,
                    icon: 'images/loc.png'
                });
            })
            .catch(error => console.error('Error fetching geocode data:', error));
    });
}
