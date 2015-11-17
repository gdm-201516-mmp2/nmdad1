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
			this.registerNavigationToggleListeners();// Register All Navigation Toggle Listeners
			this.registerWindowListeners();// Register All Navigation Toggle Listeners
			// Create a clone from the JayWalker object
			this._jayWalker = JayWalker;
			this._jayWalker.init();
		},
		registerNavigationToggleListeners: function() {
			var toggles = document.querySelectorAll('.navigation-toggle');
			
			if(toggles != null && toggles.length > 0) {
				var toggle = null;
				
				for(var i = 0; i < toggles.length; i++ ) {
					toggle = toggles[i];
					toggle.addEventListener('click', function(ev) {
						ev.preventDefault();
						
						document.querySelector('body').classList.toggle(this.dataset.navtype);
						
						return false;
					});	
				}
			}
		},
		registerWindowListeners: function() {
			window.addEventListener('resize', function(ev) {
				if(document.querySelector('body').classList.contains('offcanvas-open')) {
					document.querySelector('body').classList.remove('offcanvas-open');
				}
				
				if(document.querySelector('body').classList.contains('headernav-open')) {
					document.querySelector('body').classList.remove('headernav-open');
				}
			});
		}
	};
	
	App.init();// Intialize the application
	
})();