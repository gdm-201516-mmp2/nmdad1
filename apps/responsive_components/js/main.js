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
			// Create the crosswalker variable via the corresponding clone
			this._crossWalker = CrossWalker;
			this._crossWalker.init();
			this._crossWalker.setActivePage('home');
			this._crossWalker.setActivePageState('home', 'list');
		}
	};
	
	App.init();// Intialize the application
	
})();