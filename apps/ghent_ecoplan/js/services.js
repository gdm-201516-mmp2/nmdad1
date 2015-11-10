/*
* Load the dataset: Ecoplan from Ghent API
* init: Initialize the API with certain URI
* getEcoplan: Get the Ecplan JSON data
*/
var EcoplanAPI = {
	init: function(connString) {
		this._connString = connString;
	},
	getEcoplan: function() {
		var url = this._connString;
		return Utils.getJSONByPromise(url);
	}
}

/*
* DbContext for Ecoplan
* CRUD operations
*/
var EcoplanDbContext = {
	init: function(connString) {
		this._connString = connString;// Connection string to the localstorage
		// Create an initial object --> save later
		this._appData = {
			"information": {
				"title": "Ghent Ecoplan Application",
				"modified": new Date(),
				"version": "1.0.0",
				"author": "Philippe De Pauw - Waterschoot"
			},
			"ecoplan": [],
			"settings": {}	
		};
		// Get the application data from the localstorage, if not present save the data above in the localstorage
		if(Utils.store(this._connString) != null) {
			this._appData = Utils.store(this._connString);
		} else {
			Utils.store(this._connString, this._appData);
		}
	}
}