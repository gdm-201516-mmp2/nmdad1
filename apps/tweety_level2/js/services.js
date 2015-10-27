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
			"settings": {}
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
		var tweets = this._tweetsData.tweets;
		
		if(tweets == null || (tweets != null && tweets.length == 0)) {
			return null;
		}
		
		return tweets;
	},
	// Get a specific tweet by id
	getTweetById: function(id) {
		var tweets = this.getTweets();
		
		if(tweets == null) {
			return null;
		}
		
		var match = false, i = 0, tweet = null;
		while(!match && i < tweets.length) {
			tweet = tweets[i];
			if(tweet.Id == id) {
				match = true;
			} else {
				i++;
			}
		}
		
		return tweet;
	},
	// Add a new tweet
	addTweet: function(tweet) {
		if(tweet !=null && (tweet.Id == undefined || this.getTweetById(tweet.Id) == null)) {
		 	tweet.Id = Utils.guid();
			this._tweetsData.tweets.push(tweet);
			this.save();
		}
		return null;
	},
	// Update an exisiting tweet
	updateTweet: function(tweet) {
		var originalTweet = this.getTweetById(tweet.Id);
		if(originalTweet == null) {
			return false;
		}
		var index = this.findIndexOfTweetById(tweet.Id);
		if(index == -1) {
			return false;
		}
		this._tweetsData.tweets[index] = tweet;
		this.save();
		return true;
	},
	// Delete an exisiting tweet by id
	deleteTweet: function(id) {
		var originalTweet = this.getTweetById(id);
		if(originalTweet == null) {
			return false;
		}
		var index = this.findIndexOfTweetById(id);
		if(index == -1) {
			return false;
		}
		this._tweetsData.tweets.splice(index, 1);
		this.save();
		return true;
	},
	// Soft delete a tweet
	softDeleteTweet: function(id) {
		var index = this.findIndexOfTweetById(id);
		if(index == -1) {
			return false;
		}
		var tweet = this._tweetsData.tweets[index];
		tweet.DeletedAt = new Date().getTime();
		this._tweetsData.tweets[index] = tweet;
		this.save();
		return true;
	},
	// Soft undelete a tweet
	softUnDeleteTweet: function(id) {
		var index = this.findIndexOfTweetById(id);
		if(index == -1) {
			return false;
		}
		var tweet = this._tweetsData.tweets[index];
		tweet.DeletedAt = null;
		this._tweetsData.tweets[index] = tweet;
		this.save();
		return true;
	},
	findIndexOfTweetById: function(id) {
		var tweets = this.getTweets();
		if(tweets == null) {
			return -1;
		}
		var index = -1, match = false, i = 0;
		while(!match && i < tweets.length) {
			if(tweets[i].Id == id) {
				match = true;	
				index = i;			
			} else {
				i++;
			}
		}
		return index;
	},
	// Save
	save: function() {
		Utils.store(this._connString, this._tweetsData);
	}	
};