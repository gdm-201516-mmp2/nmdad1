Handlebars.registerHelper('fullName', function(person) {
   return person.title + ' ' + person.first + ' ' + person.last; 
});
Handlebars.registerHelper('toLowerCase', function(str) {
   return str.toLowerCase();
});
Handlebars.registerHelper('toShortDateString', function(dob) {
   return new Date(dob * 1000).toShortDateString();
});
Handlebars.registerHelper('address', function(location) {
   return location.street + ', ' + location.zip + ' ' + location.city
})
Handlebars.registerHelper('timeToTwitterDateTimeString', function(time) {
   return Utils.timeToTwitterDateTimeString(time)
});
Handlebars.registerHelper('geoReadable', function(lat, lng){
    return '(' + parseFloat(lat).toFixed(5) + ', ' + parseFloat(lng).toFixed(5) + ')';
});
Handlebars.registerHelper('geoDistance', function(place, geoLocation){
    var distance = Utils.calculateDistanceBetweenTwoCoordinates(place.lat, place.long, geoLocation.coords.latitude, geoLocation.coords.longitude);

    if(distance > 1){
        distance = distance.toFixed(3) + ' km';
    }else{
        distance = (distance*1000).toFixed(0) + ' m';
    }
    return distance;
});
Handlebars.registerHelper('usageYear', function(year) {
    return (year > 1970)?' (Ingebruikname: ' + year + ')':'';
});
Handlebars.registerHelper('getReadableGeoDistance', function(distance) {
    if(distance > 1) {
        distance = distance.toFixed(3) + ' km';
    } else {
        distance = (distance*1000).toFixed(0) + ' m';
    }
    return distance;
});