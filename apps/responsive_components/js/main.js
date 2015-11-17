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
		},
		registerNavigationToggleListeners: function() {
			var toggles = document.querySelectorAll('.header__navigation-toggle');
			
			if(toggles != null && toggles.length > 0) {
				var toggle = null, navid = null;
				
				for(var i = 0; i < toggles.length; i++ ) {
					toggle = toggles[i];
					toggle.addEventListener('click', function(ev) {
						ev.preventDefault();
						
						navid = this.dataset.navid;
						document.querySelector('#' + navid).classList.toggle('open');
						
						return false;
					});	
				}
			}
		}
	};
	
	App.init();// Intialize the application
	
})();