(function() {
	
	var App = {
		"init" : function() {
			
			this.URLRANDOMUSERME = 'http://api.randomuser.me/?results=200';// Cache the url with random users in variable URLRANDOMUSERME
			// Create the TweetsDbContext object via clone
			this._tweetsDbContext = TweetsDbContext;
			// Initialize the TweetsDbContext given a certain namespace aka connection string
			this._tweetsDbContext.init('dds.tweets');
			
			this.hbsCache = {};// Handlebars cache for templates
			this.hbsParialsCache = {};// Handlebars Partial cache for templates
			this.updateTweetsUI();// Callback: Load Tweets from DbContext
		},
		"updateTweetsUI": function() {
			var tweets = this._tweetsDbContext.getTweets(); // Get all tweets
			if(tweets != null) {	
				if(!this.hbsCache['tweets']) {
					var src = document.querySelector('#tweets-template').innerHTML;// Get the contents from the specified hbs template
					this.hbsCache['tweets'] = Handlebars.compile(src);// Compile the source and add it to the hbs cache
				}
				document.querySelector('.tweets').innerHTML = this.hbsCache['tweets'](tweets);
			}
		}	
	};
	App.init();
	 
})();