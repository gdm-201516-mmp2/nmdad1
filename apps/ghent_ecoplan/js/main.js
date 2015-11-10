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
			// Create the DbContext for Ecoplan by clone
			this._ecoplanDbContext = EcoplanDbContext;
			this._ecoplanDbContext.init('dds.ghent.ecoplan');
			// Call the method getEcoplanFromAPI in order to load the JSON data
			this.getEcoplanFromAPI();
		},
		getEcoplanFromAPI: function() {
			var self = this;
			// Load the JSON data from API
			this._ecoplanAPI.getEcoplan().then(
				function(data) {
					var ecoplanPlace = null;
					for(var i = 0; i < data.length; i++) {
						ecoplanPlace = data[i];
						self._ecoplanDbContext.addEcoplanPlace(ecoplanPlace);
					}
				},
				function(error) {
					
				}
			)
		}	
	};
	
	App.init();// Call the init function from the App object
	
})();