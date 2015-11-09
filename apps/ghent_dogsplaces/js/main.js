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
			// Call API
			this.getHondenvoorzieningenFromAPI();
		},
		getHondenvoorzieningenFromAPI: function() {
			this._hondenvoorzieningenAPI.getHondenvoorzieningen().then(
				function(data) {
					var dogstoilets = [], type = null, dogtoilet = null;
					var hondenvoorzieningen = data.Document.Folder.Placemark;
					
					for(var i = 0;i < hondenvoorzieningen.length;i++) {
						type = hondenvoorzieningen[i].ExtendedData.SchemaData.SimpleData[3]['@text'];
						
						switch(type) {
							case 'Hondentoilet':
								dogtoilet = {
									"id": Utils.guid(), 
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
					console.log(dogstoilets);
				},
				function(error) {
					
				}
			);
		}	
	};
	
	App.init();// Initialize the application by calling the init() method
})();