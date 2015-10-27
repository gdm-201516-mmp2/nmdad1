var TweetsDbContext = {
	// Initialize Db Context
	init: function(connString) {
		this._connString = connString;// Save connection string in local variable
		this._tweetsData = {
			"info": {
				"title": "Tweets Application",
				"version": "1.0",
				"modified": "11-16-2015",
				"author": "Philipp De Pauw - Waterschoot"	
			},
			"tweets": [],
			"postweets": [],
			"negtweets": [],
			"seetings": {}
		};
		// Get the stored data. If not present store the value of the _tweetsData in the localstorage
		if(Utils.store(this._connString) != null) {
			this._tweetsData = Utils.store(this._connString);
		} else {
			Utils.store(this._connString, this._tweetsData);
		}	
	},
	// Get All Tweets
	getTweets: function() {
		
	},
	// Get a specific tweet by id
	getTweetById: function() {
		
	},
	// Add a new tweet
	addTweet: function(tweet) {
		
	},
	// Update an exisiting tweet
	updateTweet: function(tweet) {
		
	},
	// Delete an exisiting tweet by id
	deleteTweet: function(id) {
		
	},
	// Soft delete a tweet
	softDeleteTweet: function(id) {
		
	},
	// Soft undelete a tweet
	softUnDeleteTweet: function(id) {
		
	},
	// Save a tweet
	saveTweet: function(tweet) {
		
	}	
};