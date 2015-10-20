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
					tempStr += '<section class="user__details">';
					tempStr += '<ul>';
					tempStr += '<li><span class="fa fa-user  "></span>' +  user.username + '</li>';
					tempStr += '<li><span class="fa fa-envelope"></span>' + user.email + '</li>';
					tempStr += '<li><span class="fa fa-lock"></span>' + user.password + '</li>';
					tempStr += '<li><span class="fa fa-calendar"></span>' +  new Date(user.dob * 1000).toShortDateString() + '</li>';
					tempStr += '<li><span class="fa fa-phone"></span>' + user.phone + '</li>';
					tempStr += '<li><span class="fa fa-mobile-phone"></span>' + user.cell + '</li>';
					tempStr += '<li><span class="fa fa-map-marker"></span>' + user.location.street + ', ' + user.location.zip + ' ' + user.location.city + '</li>';
					tempStr += '<li><span class="fa fa-registered"></span>' + new Date(user.registered * 1000).toShortDateString() + '</li>';
					tempStr += '</ul>';
					tempStr += '</section>';
					tempStr += '</li>';
				}
				tempStr += '</ul>';
				document.querySelector('.rum-users').innerHTML = tempStr;
				 				
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