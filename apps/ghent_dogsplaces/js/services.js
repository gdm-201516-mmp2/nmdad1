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
	addDogToilet: function(dogToilet) {
		dogToilet.id = Utils.guid();// Create unique id
		
		this._appData.dogstoilets.push(dogToilet);// Add to array
		this.save(); // Save in localstorage via save method
	},
	getDogToilets: function() {
		return 	this._appData.dogtoilets;
	},
	getDogToiletById: function(id) {
		var dogToilet = null, match = false, i = 0;
		
		while(!match && i < this._appData.dogtoilets.length) {
			dogToilet = this._appData.dogtoilets[i];
			if(dogToilet.id == id) {
				match = true;
			} else {
				i++;
			}
		}
		
		return dogToilet;
	},
	save: function() {
		Utils.store(this._connString, this._appData); //Save in localstorage
	}	
};