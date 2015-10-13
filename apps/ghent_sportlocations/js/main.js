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
			alert('UPDATE UI');
		}	
	};
	App.init();
	 
})();