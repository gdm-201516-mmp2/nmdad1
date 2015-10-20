(function() {
	
	var App = {
		"init" : function() {
			
			this.URLRANDOMUSERME = 'http://api.randomuser.me/?results=200';// Cache the url with random users in variable URLRANDOMUSERME
			this._randomUsersData = null;// Cached data for random users
			this.loadRandomUsers();// Callback: Load dataset RandomUsersMe via API
			
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
					tempStr += '<img src="' + user.picture.medium + '" alt="Picture for the user: ' + user.name.title + ' ' + user.name.first + ' ' + user.name.last + '" />';
					tempStr += '</picture>';
					tempStr += '<span class="user__name">' + user.name.first + ' ' + user.name.last + '</span>';
					tempStr += '<a class="user__details-link" href="#" title="Details for the user: ' + user.username + '">';
					tempStr += '<span class="fa fa-chevron-right"></span>';
					tempStr += '</a>';
					tempStr += '</li>';
				}
				/*
				<li class="user" data-id="jonagold">
					<picture class="user__picture">
						<img src="http://lorempixel.com/200/200/people/8/" alt="Picture for the user: Jorn Brak" />
					</picture>
					<span class="user__name">Jona Gold</span>
					<a class="user__details-link" href="#" title="Details for the user: Jorn Brak">
						<span class="fa fa-chevron-right"></span>
					</a>
				</li>
				*/
				tempStr += '</ul>';
				document.querySelector('.rum-users').innerHTML = tempStr;
			}			
			
		}	
	};
	App.init();
	 
})();