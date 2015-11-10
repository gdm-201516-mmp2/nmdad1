/*
*	Description: Ghent Trees Application
*	Modified: 10-11-2015
*	Version: 1.0.0
*	Author: Philippe De Pauw - Waterschoot
* 	-----------------------------------------------
*	Ghent Bomen Inventaris API: http://datatank.stad.gent/4/milieuennatuur/bomeninventaris.json
*/

// Anonymous function executed when document loaded
(function() {
	
	// Describe an App object with own functionalities
	var App = {
		init: function() {
			// Create the services via the corresponding clones
			this._treesInventoryAPI = TreesInventoryAPI;
			this._treesInventoryAPI.init('http://datatank.stad.gent/4/milieuennatuur/bomeninventaris.json');
			// Create the Db context classes via the corresponding clones
			this._treesDbContext = TreesDbContext;
			this._treesDbContext.init('dds.ghent.trees');
			// Call the API if no treesinventory is present in the database (localstorage)
			if(this._treesDbContext.getTreesInventory() == null || (this._treesDbContext.getTreesInventory() != null && this._treesDbContext.getTreesInventory().length == 0)) {
				this.getTreesInventoryFromAPI();
			} else {
				this.renderTreesIventoryUI();// Render UI for trees iventory
			}			
		},
		getTreesInventoryFromAPI: function() {
			var self = this;
			this._treesInventoryAPI.getTreesInventory().then(
				function(data) {
					var treesInventoryOriginal = data.Document.Folder.Placemark;
					var l = 2000;//max 4 MB in localstorage
					var treeOriginal = null, tree = null;
					for(var i = 0; i < l; i++) {
						treeOriginal = treesInventoryOriginal[i];// Get the current tree in the array by index
						tree = {
							"ghentid": treeOriginal.ExtendedData.SchemaData.SimpleData[1]['@text'],
							"ghentcode": treeOriginal.ExtendedData.SchemaData.SimpleData[2]['@text'],
							"name": treeOriginal.ExtendedData.SchemaData.SimpleData[3]['@text'],
							"namenl": treeOriginal.ExtendedData.SchemaData.SimpleData[4]['@text'],
							"dimensions": {
								"height": treeOriginal.ExtendedData.SchemaData.SimpleData[5]['@text'],
								"diameter": treeOriginal.ExtendedData.SchemaData.SimpleData[6]['@text']
							},
							"dayofbirth": parseInt(treeOriginal.ExtendedData.SchemaData.SimpleData[7]['@text']),
							"geolocation": {
								"lat": parseFloat(treeOriginal.Point.coordinates['@text'].split(',')[1]),
								"lng": parseFloat(treeOriginal.Point.coordinates['@text'].split(',')[0])
							}
						}; 
						self._treesDbContext.addTreeToInventory(tree);// Add tree to localstorage
					}
					self.renderTreesIventoryUI();// Render UI for trees iventory
				},
				function(error) {
					
				}
			);
		},
		renderTreesIventoryUI: function() {
			
		}		
	};
	
	App.init();// Intialize the application
	
})();