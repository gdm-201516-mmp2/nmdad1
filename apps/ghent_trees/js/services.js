/*
* Load Trees Inventory from Ghent
* via resource URI
*/
var TreesInventoryAPI = {
	init: function(connString) {
		this._connString = connString;
	},
	getTreesInventory: function() {
		var url = this._connString;
		return Utils.getJSONByPromise(url);
	}	
}

/*
* Database class for CRUD operations
* on resources related to trees
*/
var TreesDbContext = {
	init: function(connString) {
		this._connString = connString;
		// Describe the initial Application Data
		this._appData = {
			"information": {
				"title": "Ghent Trees Applicaion",
				"modified": new Date(),
				"version": "1.0.0",
				"author": "Philippe De Pauw - Waterschoot"
			},
			"treesinventory": [],
			"settings": {}	
		};
		// Check the localstorage if application data is present
		// if present load that data into _appData
		// else save the _appData to the localstorage
		if(Utils.store(this._connString) != null) {
			this._appData = Utils.store(this._connString);
		} else {
			Utils.store(this._connString, this._appData);
		}
	},
	getTreesInventory: function() {
		return this._appData.treesinventory;
	}, 
	getTreeFromInventoryById: function(id) {
		
	},
	addTreeToInventory: function(tree) {
		tree.id = Utils.guid();// Create your own primary key for a tree
		tree.createdAt = new Date();// Add the creation date to the tree object
		
		this._appData.treesinventory.push(tree);// Add tree to the trees inventory
		
		if(this.save() == 0) {
			return null;
		}// Save to the tree to the localstorage
		
		return tree;
	},
	save: function() {
		Utils.store(this._connString, this._appData);
		
		return 1;
	}
}