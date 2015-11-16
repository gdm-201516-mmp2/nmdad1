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
			this._hbsCache = {};// Handlebars cache for templates
			this._hbsPartialsCache = {};// Handlebars cache for partials
			// Create the services via a corresponding clone
			this._hondenVoorzieningenAPI = HondenVoorzieningenAPI;
			this._hondenVoorzieningenAPI.init('http://datatank.stad.gent/4/infrastructuur/hondenvoorzieningen.json');
			// Create PetsDbContext by clone
			this._petsDbContext = PetsDbContext;
			this._petsDbContext.init('dds.ghent.pets');
			// Call API if no dogstoilets are present in database (localstorage), and then add it to the localstorage via DbContext
			if(this._petsDbContext.getDogsToilets() == null || (this._petsDbContext.getDogsToilets() != null &&this._petsDbContext.getDogsToilets().length == 0)) {
				this.getHondenVoorzieningenFromAPI();
			} else {
				this.renderDogsToilets();
			}
			
		},
		getHondenVoorzieningenFromAPI: function() {
			var self = this;
			
			this._hondenVoorzieningenAPI.getHondenVoorzieningen().then(
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
					
					// Add dogs toilets to localstorage via DbContext
					for(var j = 0;j < dogstoilets.length;j++) {
						self._petsDbContext.addDogsToilet(dogstoilets[j]);
					}
					
					// Render the interface
					self.renderDogsToilets();
				},
				function(error) {
					
				}
			);
		},
		renderDogsToilets: function() {
			if(!this._hbsCache['dogs-toilets']) {
				var src = document.querySelector('#dogs-toilets-template').innerHTML;// Get the contents from the specified hbs template
				this._hbsCache['dogs-toilets'] = Handlebars.compile(src);// Compile the source and add it to the hbs cache
			}
			document.querySelector('#dogs-toilets-list').innerHTML = this._hbsCache['dogs-toilets'](this._petsDbContext.getDogsToilets());
		}	
	};
	
	App.init();// Initialize the application by calling the init() method
})();