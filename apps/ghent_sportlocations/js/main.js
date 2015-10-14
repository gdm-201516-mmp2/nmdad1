(function() {
	
	var App = {
		"init" : function() {
			
			this.URLDSGHENTSPORTLOCATIONS = 'http://datatank.stad.gent/4/cultuursportvrijetijd/buurtsportlocaties.json';// Cache the url with sportlocations in variable URLDSGHENTSPORTLOCATIONS
			this._ghentSportlocationsData = null;// Cached data fro sportlocations in Ghent
			this.loadGhentSportlocations();// Callback: Load dataset Sportlocations from Ghent via API
			
		},
		"loadGhentSportlocations": function() {
			
			// Closure
			var self = this;
			
			// Load JSON from corresponding API with certain URL
			getJSONByPromise(this.URLDSGHENTSPORTLOCATIONS).then(
				function(data) {
					self._ghentSportlocationsData = data;// Assign data as value flor global variable _ghentSportlocationsData within the App
					self.updateUI();// Call updateUI method when successful		
				},
				function(status) {
					console.log(status);
				}
			);
			
		},
		"updateUI": function() {
			
			if(this._ghentSportlocationsData != null && this._ghentSportlocationsData.features != null) {
				// Soring the data on description of the parking
				this._ghentSportlocationsData.features.sort(function(a, b) {
					if (a.properties.Naam > b.properties.Naam) {
						return 1;
					}
					if (a.properties.Naam < b.properties.Naam) {
						return -1;
					}
					return 0;
				});
				var tempStr = '', sportLocation = null;
				tempStr += '<ul>';
				for(var i = 0;i < this._ghentSportlocationsData.features.length;i++) {
					sportLocation = this._ghentSportlocationsData.features[i];
					tempStr += '<li class="sportlocation" data-id="' + sportLocation.properties.NUMMER + '">';
					tempStr += '<span class="sportlocation__name">' + sportLocation.properties.Naam + '</span>';
					tempStr += '<span class="sportlocation__district">' + sportLocation.properties.Wijk + '</span>';
					tempStr += '<span class="sportlocation__sport">' + sportLocation.properties.Sport + '</span>';
					tempStr += '</li>';
				}
				tempStr += '</ul>';
				document.querySelector('.ghent-sportlocations').innerHTML = tempStr;
			}			
			
		}	
	};
	App.init();
	 
})();