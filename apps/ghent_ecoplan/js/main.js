/*
*	Description: Ecoplan Application
*	Modified: 10-11-2015
*	Version: 1.0.0
*	Author: Philippe De Pauw - Waterschoot
* 	-----------------------------------------------
*	Ecoplan API: http://datatank.stad.gent/4/milieuennatuur/ecoplan.json
*/

// Anonymous function executed when document loaded
(function() {
	
	// Declare an App object
	var App = {
		init: function() {
			// Create the service via a corresponding clone
			this._ecoplanAPI = EcoplanAPI;
			this._ecoplanAPI.init('http://datatank.stad.gent/4/milieuennatuur/ecoplan.json');
			// Call the method getEcoplanFromAPI in order to load the JSON data
			this.getEcoplanFromAPI();
		},
		getEcoplanFromAPI: function() {
			// Load the JSON data from API
			this._ecoplanAPI.getEcoplan().then(
				function(data) {
					console.log(data);
				},
				function(error) {
					
				}
			)
		}	
	};
	
	App.init();// Call the init function from the App object
	
})();