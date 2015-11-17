/*
*	Description: CrossWalker Library
*	Modified: 16-11-2015
*	Version: 1.0.0
*	Author: Philippe De Pauw - Waterschoot
* 	Dependencies: Crossroads, Hasher
*/

var CrossWalker = {
	init: function() {
		// Routing
		this._router = crossroads;// Clone the crossroads object
		this._hasher = hasher;// Clone the hasher object
		this.registerRouterAndHasherListeners();// Register router listeners
		
		// Page and Page State listeners
		this.registerPageStateNavigationListeners();// Register page state navigation listeners
		this.registerOffCanvasListeners();// Register Off Canvas Listeners		
	},
	registerOffCanvasListeners: function() {
		var offcanvasNavigation = document.querySelector('.offcanvas-navigation');
        var offcanvasToggles = document.querySelectorAll(".offcanvas-toggle");	
		
		_.each(offcanvasToggles, function(toggle){
			toggle.addEventListener("click", function(ev){
				ev.preventDefault();

				var navigation_reference_name = this.getAttribute("href");
				var navigation = document.querySelector(navigation_reference_name);
				document.body.classList.toggle('offcanvasactive');

				return false;
			}, false);
		});
	},
	registerRouterAndHasherListeners: function() {
		var self = this;
		
		//Crossroads settings
		var homeRoute = this._router.addRoute('/',function(){
			self.setActivePage('home');// Set the active page where id is equal to the route
		});
		var sectionRoute = this._router.addRoute('/{section}');// Add the section route to crossroads
		sectionRoute.matched.add(function(section) {
			self.setActivePage(section);// Set the active page where id is 
		});// Hash matches to section route

		// Hash settings
		this._hasher.initialized.add(function(newHash, oldHash){
			self._router.parse(newHash);
		});// Parse initial hash
		this._hasher.changed.add(function(newHash, oldHash){
			self._router.parse(newHash);
			document.body.classList.remove('offcanvasactive');
		});// Parse changes in the hash
		this._hasher.init();// Start listening to the hashes
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
	setActivePage: function(pageId) {
		var pages = document.querySelectorAll('.page');// Get all pages
		if(pages != null && pages.length > 0) {
			_.each(pages, function(page) {
				if(page.id == pageId) {
					page.classList.add('active');
				}else{
					page.classList.remove('active');
				}
			});
		}
		
		var navLinks = document.querySelectorAll('.navigation__item');
		if(navLinks != null && navLinks.length > 0){
			var effLink = '#/' + pageId;
			_.each(navLinks, function(navLink){
				if(navLink.getAttribute('href') == effLink){
					navLink.classList.add('active');
				}else{
					navLink.classList.remove('active');
				}
			});
		}
	},
	setActivePageState: function(pageId, state) {
		var pageStates = document.querySelectorAll('#' + pageId + ' .page-state-content')
		if(pageStates != null && pageStates.length > 0) {
			_.each(pageStates,function(pageState) {
				if(pageState.dataset.pagestate == state) {
					pageState.classList.add('active');
				} else {
					pageState.classList.remove('active');
				}
			});
		}
		
		console.log(pageId);

		var pageStatesNavigation = document.querySelectorAll('[data-page=' + pageId + ']');
		if(pageStatesNavigation != null && pageStatesNavigation.length > 0){
			_.each(pageStatesNavigation,function(pageStateNav) {
				if(pageStateNav.dataset.pagestate == state) {
					pageStateNav.classList.add('active');
				} else {
					pageStateNav.classList.remove('active');
				}
			});
		}
	}		
};