/*
http://datatank.stad.gent/4/mobiliteit/bezettingparkeergaragesv11.json


*/
(function() {
	
	// Creation of an object with literal notation stored in the variable App
	var App = {
		
		"init": function() {
			this.URLDSGHENTPARKINGSSTATE = 'http://datatank.stad.gent/4/mobiliteit/bezettingparkeergaragesv11.json';// Url in order to get the parking state in Ghent
			this._ghentParkingsStateData = null;// Cache data for parkingsstate in Ghent
			this.loadGhentParkingsState();// Load the dataset for parkingsstate from Ghent via API
		},
		"loadGhentParkingsState": function() {
			
			// Closure
			var self = this;
			
			// Load JSON from corresponding API with certain URL
			getJSONByPromise(this.URLDSGHENTPARKINGSSTATE).then(
				function(data) {
					// Success
					self._ghentParkingsStateData = data;// Assign data as value for global variable _ghentParkingsStateData within the App
					self.updateUI();// Call updateUI method when successful
				},
				function(status) {
					// Error
				}
			);
			
		},
		"updateUI": function() {
			
			// Get the Array of parkings from JSON object
			var parkings = this._ghentParkingsStateData.Parkings.parkings;
			// Temporary variable for the current parking in the Array
			var parking = null;
			// Temporary variable for building a string
			var tempStr = '';
			tempStr += '<ul>';
			// Loop the parkings
			for(var i = 0;i < parkings.length;i++) {
				parking = parkings[i];
				tempStr += '<li>' + parking.name + '</li>';
			}
			tempStr += '</ul>';
			// Write in the DOM via specific container / selector
			document.querySelector('.ghent-parkings-state').innerHTML = tempStr;
		}
		
	};
	
	App.init();// Call the init function
	
})();