/*
* Load Google Maps Asynchronous
* via appending script
* Don't forget the key: https://console.developers.google.com/flows/enableapi?apiid=maps_backend&keyType=CLIENT_SIDE&reusekey=true&pli=1
* Choose web API
*/
(function(){
    var key = 'AIzaSyDSlUp7PDxUqo4LwAP3mi_6y6uAk55D8OY';//Eigen Key Gebruiken!!!

    //Load Google Maps Async
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp'
        + '&key=' + key
        + '&callback=initGoogleMaps';
    document.body.appendChild(script);

    this.initGoogleMaps = function(){
        this._googleMapsInitialized = true;
    };

})();

var GMap = {
    init:function(container) {
        var mapOptions = {
            zoom:13,
            center: new google.maps.LatLng(51.048017, 3.727666)
        }
        this._map = new google.maps.Map(document.querySelector('#' + container), mapOptions);
        google.maps.visualRefresh = true;
        google.maps.event.trigger(this._map, 'resize');
        this._geoLocationMarker = null;
        this._markersTreesInventory = [];
        this._markerClusterTreesInventory = null;
    },
    addMarkerGeoLocation: function(geoLocation) {
        this._geoLocationMarker = new google.maps.Marker({
            position: new google.maps.LatLng(geoLocation.coords.latitude, geoLocation.coords.longitude),
            title:"My location",
            icon:'images/markers/home.png'
        });// Create a Google Maps Marker

        this._geoLocationMarker.setMap(this._map);// Add Marker to Map
        this._map.setCenter(new google.maps.LatLng(geoLocation.coords.latitude, geoLocation.coords.longitude));// Set center of the map to my geolocation
    },
    addMarkersForTreesInventory: function(trees){
        if(this._markersTreesInventory.length == 0) {
            var marker = null, self = this;

            _.each(trees, function(tree){
                marker = new google.maps.Marker({
                    position:new google.maps.LatLng(tree.geolocation.lat, tree.geolocation.lng),
                    title:tree.name,
                    icon:'images/markers/tree.png'
                });// Create a Google Maps Marker
    
                marker.setMap(self._map);// Add Marker to Map
    
                self._markersTreesInventory.push(marker);
            });
            
            this._markerClusterTreesInventory = new MarkerClusterer(this._map, this._markersTreesInventory);
        }
    },
    hideMarkers: function(arrMarkers, hide){
        var self = this;

        _.each(arrMarkers, function(marker){
            if(hide){
                marker.setMap(null);
            }else{
                marker.setMap(self.map);
            }
        });
    },
    refresh: function() {
        google.maps.visualRefresh = true;
        google.maps.event.trigger(this.map,'resize');
    }
};