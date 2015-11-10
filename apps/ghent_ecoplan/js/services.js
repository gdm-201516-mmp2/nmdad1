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