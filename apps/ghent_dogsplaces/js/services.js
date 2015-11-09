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