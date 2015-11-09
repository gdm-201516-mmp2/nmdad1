Handlebars.registerHelper('fullName', function(person) {
   return person.title + ' ' + person.first + ' ' + person.last; 
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