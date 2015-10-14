(function() {
	var App = {
		"init": function() {
			this.URLDSGHENTBIRTHSAPI = 'http://datatank.stad.gent/4/bevolking/geboortes.json';// URL in order to get the births in Ghent
			this.URLDSGHENTDEATHSAPI = 'http://datatank.stad.gent/4/bevolking/overlijdens.json';// URL in order to get the deaths in Ghent
			this._ghentBirthsData = null;// Cached data for births in Ghent
			this._ghentTotalBirths = [];// Cached data for total births in Ghent per year
			this.loadGhentBirthsAPI();// Load dataset Births from Ghent via API
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
		"updateUI": function() {
			
			if (this._ghentBirthsData != null && this._ghentBirthsData.length > 0) {
				
				var tempStr = '', births = 0;
				tempStr += '<ul class="list">';
				for(var i = 0;i < this._ghentBirthsData.length;i++) {
					tempStr += '<li class="listitem">';
					tempStr += '<article>';
					tempStr += '<h3>' + this._ghentBirthsData[i]['\ufeffwijk'] + '</h3>';
					tempStr += '<table class="table">';
					tempStr += '<thead>';
					tempStr += '<tr><th>Jaar</th><th>Aantal geboortes</th></tr>';
					tempStr += '</thead>';
					tempStr += '<tbody>';
					for(var j = 1999;j <= 2009;j++) {
						births = this._ghentBirthsData[i]['year_' + j];
						
						// Add births to the current births for the active year in the loop
						this._ghentTotalBirths['year_' + j] = (this._ghentTotalBirths['year_' + j] == undefined)?parseInt(births):(this._ghentTotalBirths['year_' + j] + parseInt(births));
						
						tempStr += '<tr><td>' + j + '</td><td>' + births + '</td></tr>'
					}
					tempStr += '</tbody>';
					tempStr += '</table>';
					tempStr += '</article>';
					tempStr += '</li>';
				}
				tempStr += '</ul>';
				document.querySelector('.ghent-births').innerHTML = tempStr;
				
				/* Total Births in Ghent */
				tempStr = '';
				tempStr += '<ul class="list">';
				tempStr += '<li class="listitem">';
				tempStr += '<article>';
				tempStr += '<h3>Totaal aantal geboortes in Gent</h3>';
				tempStr += '<table class="table">';
				tempStr += '<thead>';
				tempStr += '<tr><th>Jaar</th><th>Aantal geboortes</th></tr>';
				tempStr += '</thead>';
				tempStr += '<tbody>';
				for(var k = 1999;k <= 2009;k++) {
					births = this._ghentTotalBirths['year_' + k];
					
					tempStr += '<tr><td>' + k + '</td><td>' + births + '</td></tr>'
				}
				tempStr += '</tbody>';
				tempStr += '</table>';
				tempStr += '</article>';
				tempStr += '</li>';
				tempStr += '</ul>';
				document.querySelector('.ghent-births-total').innerHTML = tempStr;
				
			}
		}
	};
	App.init();// Initialize the app
})()