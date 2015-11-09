/*
* Created by: Philippe De Pauw - Waterschoot
* Date: 09-11-2015
* Version: 1.0.0
* Description: Pets Application
* Hondenvoorzieningen API: http://datatank.stad.gent/4/infrastructuur/hondenvoorzieningen.json
*/

// Anonymous function: executed when document loaded
(function() {
	// Create the App
	var App = {
		// Initialize the application
		init: function() {
			// Create the services via a corresponding clone
			this._hondenvoorzieningenAPI = HondenvoorzieningenAPI;
			this._hondenvoorzieningenAPI.init('http://datatank.stad.gent/4/infrastructuur/hondenvoorzieningen.json');
			// Create PetsDbContext by clone
			this._petsDbContext = PetsDbContext;
			this._petsDbContext.init('dds.ghent.pets');
			// Call API if no dogstoilets present in database (localstorage)
			if(this._petsDbContext.getDogsToilets() == null || this._petsDbContext.getDogsToilets().length == 0) {
				this.getHondenvoorzieningenFromAPI();
			} else {
				this.renderDogsToilets();
			}
			
		},
		getHondenvoorzieningenFromAPI: function() {
			var self = this;
			
			this._hondenvoorzieningenAPI.getHondenvoorzieningen().then(
				function(data) {
					var dogstoilets = [], type = null, dogtoilet = null;
					var hondenvoorzieningen = data.Document.Folder.Placemark;
					
					for(var i = 0;i < hondenvoorzieningen.length;i++) {
						type = hondenvoorzieningen[i].ExtendedData.SchemaData.SimpleData[3]['@text'];
						
						switch(type) {
							case 'Hondentoilet':
								dogtoilet = {
									"description": hondenvoorzieningen[i].ExtendedData.SchemaData.SimpleData[6]['@text'],
									"body": hondenvoorzieningen[i].description['@text'], 
									"geolocation": {
										"lat": parseFloat(hondenvoorzieningen[i].Point.coordinates['@text'].split(',')[1]),
										"lng": parseFloat(hondenvoorzieningen[i].Point.coordinates['@text'].split(',')[0])
									}
								};
								dogstoilets.push(dogtoilet);
								break;
						}
					}
					
					// Add dogs toilets
					for(var j = 0;j < dogstoilets.length;j++) {
						self._petsDbContext.addDogsToilet(dogstoilets[j]);
					}
				},
				function(error) {
					
				}
			);
		},
		renderDogsToilets: function() {
			
		}	
	};
	
	App.init();// Initialize the application by calling the init() method
})();