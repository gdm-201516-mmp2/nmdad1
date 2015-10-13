(function() {
	var App = {
		"init": function() {
			this.URLDSGHENTBIRTHSAPI = 'http://datatank.stad.gent/4/bevolking/geboortes.json';// URL in order to get the births in Ghent
			this.URLDSGHENTDEATHSAPI = 'http://datatank.stad.gent/4/bevolking/overlijdens.json';// URL in order to get the deaths in Ghent
			this._ghentBirthsData = null;// Cached data for births in Ghent
			this._ghentDeathsData = null;// Cached data for deaths in Ghent
			this.loadGhentBirthsAPI();// Load dataset Births from Ghent via API
			this.loadGhentDeathsAPI();// Load dataset Deaths from Ghent via API
		},
		"loadGhentBirthsAPI": function() {
			var self = this;// Closure
			//Load JSON from corresponding API with certain URL
			getJSONByPromise(this.URLDSGHENTBIRTHSAPI).then(
				function(data) {
					self._ghentBirthsData = data;// Assign data as value for global variable _ghentBirthsData within the App
					self.updateUI();// Call updateUI method when successfull
				},
				function(status) {
					console.log(status);
				}
			);
		},
		"loadGhentDeathsAPI": function() {
			var self = this;// Closure
			//Load JSON from corresponding API with certain URL
			getJSONByPromise(this.URLDSGHENTDEATHSAPI).then(
				function(data) {
					self._ghentDeathsData = data;// Assign data as value for global variable _ghentDeathsData within the App
					self.updateUI();// Call updateUI method when successfull
				},
				function(status) {
					console.log(status);
				}
			);
		},
		"updateUI": function() {
			
			if (this._ghentBirthsData != null && this._ghentBirthsData.length > 0) {
				
				var tempStr = '';
				tempStr += '<ul>';
				for(var i = 0;i < this._ghentBirthsData.length;i++) {
					tempStr += '<li class="grid__columns-bp1-12">';
					tempStr += '<article>';
					tempStr += '<h3>' + this._ghentBirthsData[i]['\ufeffwijk'] + '</h3>';
					tempStr += '<table>';
					tempStr += '<thead>';
					tempStr += '<tr><th>Jaar</th><th>Aantal geboortes</th></tr>';
					tempStr += '</thead>';
					tempStr += '<tbody>';
					for(var j = 1999;j <= 2009;j++) {
						tempStr += '<tr><td>' + j + '</td><td>' + this._ghentBirthsData[i]['year_' + j] + '</td></tr>'
					}
					tempStr += '</tbody>';
					tempStr += '</table>';
					tempStr += '</article>';
					tempStr += '</li>';
				}
				tempStr += '</ul>';
				document.querySelector('.ghent-births').innerHTML = tempStr;
			}
			
			if (this._ghentDeathsData != null && this._ghentDeathsData.length > 0) {
				
				var tempStr = '';
				tempStr += '<ul>';
				for(var i = 0;i < this._ghentDeathsData.length;i++) {
					tempStr += '<li class="grid__columns-bp1-12">';
					tempStr += '<article>';
					tempStr += '<h3>' + this._ghentDeathsData[i]['\ufeffwijk'] + '</h3>';
					tempStr += '<table>';
					tempStr += '<thead>';
					tempStr += '<tr><th>Jaar</th><th>Aantal sterfgevallen</th></tr>';
					tempStr += '</thead>';
					tempStr += '<tbody>';
					for(var j = 1999;j <= 2009;j++) {
						tempStr += '<tr><td>' + j + '</td><td>' + this._ghentDeathsData[i]['year_' + j] + '</td></tr>'
					}
					tempStr += '</tbody>';
					tempStr += '</table>';
					tempStr += '</article>';
					tempStr += '</li>';
				}
				tempStr += '</ul>';
				document.querySelector('.ghent-deaths').innerHTML = tempStr;
			}
		}
	};
	App.init();// Initialize the app
})()