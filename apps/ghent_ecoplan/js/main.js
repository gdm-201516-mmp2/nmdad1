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
			// Call the method getEcoplanFromAPI in order to load the JSON data if no data present in localstorage
			if(this._ecoplanDbContext.getEcoplan() == null || (this._ecoplanDbContext.getEcoplan() != null && this._ecoplanDbContext.getEcoplan().length == 0)) {
				this.getEcoplanFromAPI();
			} else {
				this.renderEcoplanUI();// Render Ecoplan User Interface
			}			
		},
		getEcoplanFromAPI: function() {
			var self = this;
			// Load the JSON data from API
			this._ecoplanAPI.getEcoplan().then(
				function(data) {
					var ecoplanPlaceOriginal = null, ecoplanPlace = null;
					for(var i = 0; i < data.length; i++) {
						ecoplanPlaceOriginal = data[i];
						ecoplanPlace = {
							"name": ecoplanPlaceOriginal.NAAM,
							"description": ecoplanPlaceOriginal.opmerkingen,
							"category": ecoplanPlaceOriginal.CATEGORIE,
							"tags": ecoplanPlaceOriginal.LABEL,
							"address": {
								"street": ecoplanPlaceOriginal.STRAAT,
								"housenr": ecoplanPlaceOriginal.NUMMER,
								"postalcode": ecoplanPlaceOriginal.POSTCODE,
								"city": ecoplanPlaceOriginal.GEMEENTE,
								"geolocation": {
									"lat": parseFloat(ecoplanPlaceOriginal.lat),
									"lng": parseFloat(ecoplanPlaceOriginal.lng)
								}
							},
							"url": ecoplanPlaceOriginal.WEBADRES,
							"tel": ecoplanPlaceOriginal.telefoon		
						};
						self._ecoplanDbContext.addEcoplanPlace(ecoplanPlace);
					}
					
					self.renderEcoplanUI();// Render Ecoplan User Interface
				},
				function(error) {
					
				}
			)
		},
		renderEcoplanUI: function() {
			
		}	
	};
	
	App.init();// Call the init function from the App object
	
})();