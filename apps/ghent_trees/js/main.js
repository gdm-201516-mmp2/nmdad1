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
			// Geolocation
			this._geoLocation = null;
			// Google Maps
			this._gMap = null;
			// Handlebars Cache
			this._hbsCache = {};// Handlebars cache for templates
			this._hbsPartialsCache = {};// Handlebars cache for partials
			// Create the pages lib via the corresponding clone
			this._pages = Pages;
			this._pages.init();
			// Create the services via the corresponding clones
			this._treesInventoryAPI = TreesInventoryAPI;
			this._treesInventoryAPI.init('http://datatank.stad.gent/4/milieuennatuur/bomeninventaris.json');
			// Create the Db context classes via the corresponding clones
			this._treesDbContext = TreesDbContext;
			this._treesDbContext.init('dds.ghent.trees');
			// Check Google Maps Initialized
			if(this._gMap == null) {
				this.checkGoogleMapsInitialized();
			}
			// Get the geolocation of the user
			if(this._geoLocation == null) {
				this.getGeoLocation();
			}
			// Register tree inventory sort listeners
			this.registerTreesSortListeners();
			// Call the API if no treesinventory is present in the database (localstorage)
			if(this._treesDbContext.getTreesInventory() == null || (this._treesDbContext.getTreesInventory() != null && this._treesDbContext.getTreesInventory().length == 0)) {
				this.getTreesInventoryFromAPI();
			} else {
				this.renderTreesInventoryUI(this._treesDbContext.getTreesInventory());// Render UI for trees iventory
				this.renderTreesInventoryOnGMap(this._treesDbContext.getTreesInventory());// Render Markers for trees iventory
			}	
			this._pages.setActivePageState('pages__trees-inventory', 'list');
		},
		registerTreesSortListeners: function() {
			var self = this;
			var sortNodes = document.querySelectorAll('.trees-inventory-sort a');
			var sortNode = null, data = null;
			if(sortNodes != null && sortNodes.length > 0) {
				for(var i = 0; i < sortNodes.length; i++) {
					sortNode = sortNodes[i];
					sortNode.addEventListener('click', function(ev) {
						ev.preventDefault();
						
						self.sortTreesInventory(this.getAttribute('href'));
						
						return false;
					});
				}
			}
		},
		sortTreesInventory: function(sort) {
			var treesInventory = this._treesDbContext.getTreesInventory();
			var self = this;
			switch(sort) {
				case '#name':default:
					treesInventory = _.sortBy(treesInventory, function(tree) {
						return tree.name;
					});
					break;
				case '#height':
					treesInventory = _.sortBy(treesInventory, function(tree) {
						return tree.dimensions.height;
					});
					break;
				case '#diameter':
					treesInventory = _.sortBy(treesInventory, function(tree) {
						return tree.dimensions.diameter;
					});
					break;
				case '#dayofbirth':
					treesInventory = _.sortBy(treesInventory, function(tree) {
						return tree.dayofbirth;
					});
					break;
				case '#distance':
					treesInventory = _.sortBy(treesInventory, function(tree) {
						if(self._geoLocation != null && self._geoLocation.coords != null) {
							return Utils.calculateDistanceBetweenTwoCoordinates(tree.geolocation.lat, tree.geolocation.lng, self._geoLocation.coords.latitude, self._geoLocation.coords.longitude);
						} else {
							return tree.name;
						}
					});
					break;
			}
			this.renderTreesInventoryUI(treesInventory);
			if(this._geoLocation != null) {
				// Loop throught the elements
				this.showGeoDistanceinUI();
			}
		},
		checkGoogleMapsInitialized: function() {
            var self = this;

            if(!window._googleMapsInitialized) {
                window.setTimeout(function(){self.checkGoogleMapsInitialized()}, 1000);
            } else {
                this._gMap = GMap;
                this._gMap.init('gmap-canvas');
				this.renderTreesInventoryOnGMap(this._treesDbContext.getTreesInventory());// Render Markers for trees iventory
            }
        },
		getGeoLocation: function() {
			var self = this;
			
			Utils.getGEOLocationByPromise().then(
				function(location) {
					self._geoLocation = location;
					// Loop throught the elements
					self.showGeoDistanceinUI();
					// Add Marker to Goole Maps
					if(self._gMap != null) {
						self._gMap.addMarkerGeoLocation(location);
					}
				},
				function(error) {
					self._geoLocation = null;
				}
			)
		},
		showGeoDistanceinUI: function() {
			var nodes = document.querySelectorAll('.trees-inventory-list .tree');
			
			if(nodes != null && nodes.length > 0) {
				var node, lng = 0, lat = 0, d = 0;
				
				for(var i = 0; i < nodes.length; i++) {
					node = nodes[i];
					lng = node.dataset.lng;
					lat = node.dataset.lat;
					d = Utils.calculateDistanceBetweenTwoCoordinates(lat, lng, this._geoLocation.coords.latitude, this._geoLocation.coords.longitude);
					node.querySelector('.tree__geo-distance').innerHTML = d.toFixed(3);
				}
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
					self.renderTreesInventoryUI(self._treesDbContext.getTreesInventory());// Render UI for trees iventory
					self.renderTreesInventoryOnGMap(self._treesDbContext.getTreesInventory());// Render markers for trees iventory
				},
				function(error) {
					
				}
			);
		},
		renderTreesInventoryUI: function(treesInventory) {
			if(!this._hbsCache['trees-inventory-list']) {
				var src = document.querySelector('#trees-inventory-list-template').innerHTML;// Get the contents from the specified hbs template
				this._hbsCache['trees-inventory-list'] = Handlebars.compile(src);// Compile the source and add it to the hbs cache
			}	
			document.querySelector('.trees-inventory-list').innerHTML = this._hbsCache['trees-inventory-list'](treesInventory);
		},
		renderTreesInventoryOnGMap: function(treesInventory) {
			if(this._gMap != null) {
				this._gMap.addMarkersForTreesInventory(treesInventory);
			}
		}
	};
	
	App.init();// Intialize the application
	
})();