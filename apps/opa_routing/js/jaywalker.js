/*
* Description: JayWalker
* Modified: 17-11-2015
* Version: 1.0.0
* Author: Philippe De Pauw - Waterschoot
*/
var JayWalker = {
	init: function() {
		this._router = crossroads;// Clone the crossroads object
		this._hasher = hasher;// Clone the hasher object
		this.initRouter();// Initialize the router and hasher		
	},
	initRouter: function() {
		var self = this;
		
		// Router settings: Register routes
		var homeRoute = this._router.addRoute('/', function() {
			self.setActivePage('home');
		});
		var sectionRoute = this._router.addRoute('/{section}');// Add section route to the router (crossroads)
		sectionRoute.matched.add(function(section) {
			self.setActivePage(section);
		});
		
		//Hasher settings
		this._hasher.initialized.add(function(newHash, oldHash) {
			self._router.parse(newHash);
		});// Parse initial hash
		this._hasher.changed.add(function(newHash, oldHash) {
			self._router.parse(newHash);
			if(document.querySelector('body').classList.contains('offcanvas-open')) {
				document.querySelector('body').classList.remove('offcanvas-open');
			}
			
			if(document.querySelector('body').classList.contains('headernav-open')) {
				document.querySelector('body').classList.remove('headernav-open');
			}
		});// Parse changes in the hash
		this._hasher.init();// Start listening to the hashes
	},
	setActivePage: function(page) {
		
	}	
};