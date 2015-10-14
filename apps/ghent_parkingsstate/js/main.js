(function() {
	
	// Creation of an object with literal notation stored in the variable App
	var App = {
		
		"init": function() {
			this.URLDSGHENTPARKINGSSTATE = 'http://datatank.gent.be/Mobiliteitsbedrijf/Parkings.json';// Url in order to get the parking state in Ghent
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
			
			if(this._ghentParkingsStateData != null && this._ghentParkingsStateData.Parkings != null && this._ghentParkingsStateData.Parkings.parkings != null && this._ghentParkingsStateData.Parkings.parkings.length > 0) {
				// Get the Array of parkings from JSON object
				var parkings = this._ghentParkingsStateData.Parkings.parkings;
				// Soring the data on description of the parking
				parkings.sort(function(a, b) {
					if (a.description > b.description) {
						return 1;
					}
					if (a.description < b.description) {
						return -1;
					}
					return 0;
				});
				// Temporary variable for the current parking in the Array
				var parking = null;
				// Temporary variable for building a string
				var tempStr = '';
				tempStr += '<ul>';
				// Loop the parkings
				for(var i = 0;i < parkings.length;i++) {
					parking = parkings[i];
					if(parking.availableCapacity != null) {
						tempStr += '<li class="parking" data-id="' + parking.name + '">';
						tempStr += '<span class="parking__name">' + parking.description + '</span>';
						tempStr += '<span class="parking__code">' + parking.name + '</span>';
						tempStr += '<span class="parking__state ' + convertGhentParkingsStateToSelector(parking.availableCapacity, parking.totalCapacity) + '">' + convertGhentParkingsStateToString(parking.availableCapacity, parking.totalCapacity) + '</span>';
						tempStr += '</li>';
					}
				}
				tempStr += '</ul>';
				// Write in the DOM via specific container / selector
				document.querySelector('.ghent-parkings-state').innerHTML = tempStr;
			}
			
		}
		
	};
	
	App.init();// Call the init function
	
})();