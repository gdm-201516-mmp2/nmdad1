(function() {
	
	var App = {
		"init" : function() {
			
			this.URLRANDOMUSERME = 'http://api.randomuser.me/?results=200';// Cache the url with random users in variable URLRANDOMUSERME
			this._randomUsersData = null;// Cached data for random users
			this.hbsCache = {};// Handlebars cache for templates
			this.hbsParialsCache = {};// Handlebars Partial cache for templates
			this.loadHbsPartials(); // Load Handlebars Partials and cache them
			this.loadRandomUsers();// Callback: Load dataset RandomUsersMe via API
		},
		"loadHbsPartials": function() {
			var src = document.querySelector('#user-details-template').innerHTML;// Get the contents from the specified hbs template
			Handlebars.registerPartial('user-details', src);
		},
		"loadRandomUsers": function() {
			
			// Closure
			var self = this;
			
			// Load JSON from corresponding API with certain URL
			getJSONByPromise(this.URLRANDOMUSERME).then(
				function(data) {
					self._randomUsersData = data;// Assign data as value for global variable _randomUsersData within the App
					self.updateUI();// Call updateUI method when successful		
				},
				function(status) {
					console.log(status);
				}
			);
			
		},
		"updateUI": function() {
			
			if(this._randomUsersData != null && this._randomUsersData.results != null) {	
				if(!this.hbsCache['users']) {
					var src = document.querySelector('#users-template').innerHTML;// Get the contents from the specified hbs template
					this.hbsCache['users'] = Handlebars.compile(src);// Compile the source and add it to the hbs cache
				}	
				
				document.querySelector('.rum-users').innerHTML = this.hbsCache['users'](this._randomUsersData.results);
				 				
				// Register Listeners
				var personElements = document.querySelectorAll('.rum-users>ul>li>.user__details-link');
				for(var i = 0; i < personElements.length;i++) {
					personElements[i].addEventListener('click', function (ev) {
						ev.preventDefault();
						
						var collapsedElement = this.parentElement.parentElement.querySelector('.collapsed');
						
						if(collapsedElement != null) {
							collapsedElement.classList.toggle('collapsed');
						}
						
						if(collapsedElement != this.parentElement) {
							this.parentElement.classList.toggle('collapsed');
						}
						
						return false;
					});
				}
			}			
			
		}	
	};
	App.init();
	 
})();