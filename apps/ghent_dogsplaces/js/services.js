/*
Load Datasets From Ghent
*/
var HondenvoorzieningenAPI = {
	init: function(connString) {
		this._connString = connString;
	},
	getHondenvoorzieningen: function() {
		var url = this._connString;
		return Utils.getJSONByPromise(url);
	}	
};

/*
Database classes
*/
var PetsDbContext = {
	init: function(connString) {
		this._connString = connString;// Connection string to localstorage
		// Application Data object
		this._appData = {
			"information": {
				"title": "Ghent Pets Application",
				"modified": "05-11-2015",
				"version": "1.0.0",
				"author": "Philippe De Pauw - Waterschoot"
			},
			"dogstoilets": [],
			"dogsfields": [],
			"settings": {}
		};
		// Get application data from the localstorage
		if(Utils.store(this._connString) != null) {
			this._appData = Utils.store(this._connString);
		} else {
			Utils.store(this._connString, this._appData);
		}
	},
	addDogsToilet: function(dogsToilet) {
		dogsToilet.id = Utils.guid();// Create unique id
		
		this._appData.dogstoilets.push(dogsToilet);// Add to array
		this.save(); // Save in localstorage via save method
	},
	getDogsToilets: function() {
		return 	this._appData.dogstoilets;
	},
	getDogsToiletById: function(id) {
		var dogsToilet = null, match = false, i = 0;
		
		while(!match && i < this._appData.dogstoilets.length) {
			dogsToilet = this._appData.dogstoilets[i];
			if(dogsToilet.id == id) {
				match = true;
			} else {
				i++;
			}
		}
		
		return dogsToilet;
	},
	save: function() {
		Utils.store(this._connString, this._appData); //Save in localstorage
	}	
};