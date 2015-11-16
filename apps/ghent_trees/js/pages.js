/*
*	Description: Pages Library
*	Modified: 10-11-2015
*	Version: 1.0.0
*	Author: Philippe De Pauw - Waterschoot
*/

var Pages = {
	init: function() {
		// Register page state navigation listeners
		this.registerPageStateNavigationListeners();		
	},
	registerPageStateNavigationListeners: function() {
		var self = this;
		var pageStatesNavigationItems = document.querySelectorAll('.page-state-navigation__item');

		if(pageStatesNavigationItems){
			_.each(pageStatesNavigationItems, function(item){
				item.addEventListener('click', function(ev){
					ev.preventDefault();

					self.setActivePageState(this.dataset.page, this.dataset.pagestate);

					return false;
				});
			});
		}	
	},
	setActivePageState: function(page, state) {
		var pageStates = document.querySelectorAll('#' + page + ' .page-state-content')
		if(pageStates != null && pageStates.length > 0){
			_.each(pageStates,function(pageState){
				if(pageState.dataset.pagestate == state){
					pageState.classList.add('active');
				}else{
					pageState.classList.remove('active');
				}
			});
		}

		var pageStatesNavigation = document.querySelectorAll('[data-page=' + page + ']');
		if(pageStatesNavigation != null && pageStatesNavigation.length > 0){
			_.each(pageStatesNavigation,function(pageStateNav){
				if(pageStateNav.dataset.pagestate == state){
					pageStateNav.classList.add('active');
				}else{
					pageStateNav.classList.remove('active');
				}
			});
		}
	}		
};