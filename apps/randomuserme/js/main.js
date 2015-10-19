(function() {
	
	var App = {
		"init" : function() {
			
			this.URLRANDOMUSERME = 'http://api.randomuser.me/?results=100';// Cache the url with random users in variable URLRANDOMUSERME
			this._randomUsersData = null;// Cached data for random users
			this.loadRandomUsers();// Callback: Load dataset Random Users RandomUserMe API
			
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
				
				var tempStr = '', user = null;
				tempStr += '<ul>';
				for(var i = 0;i < this._randomUsersData.results.length;i++) {
					user = this._randomUsersData.results[i].user;
					tempStr += '<li class="user" data-id="' + user.username + '">';
					tempStr += '<picture class="user__picture">';
					tempStr += '<img src="' + user.picture.medium + '" />';
					tempStr += '</picture>';
					tempStr += '<span class="user__name">' + user.name.title + ' ' + user.name.first + ' ' + user.name.last + '</span>';
					tempStr += '<a class="user__details-link" href="#" title="Details for user: ' + user.username + '">';
					tempStr += '<span class="fa fa-chevron-right">';
					tempStr += '</span>';
					tempStr += '</a>'; 
					tempStr += '</li>';
				}
				tempStr += '</ul>';
				document.querySelector('.rum-users').innerHTML = tempStr;
			}			
			
		}	
	};
	App.init();
	 
})();