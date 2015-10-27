(function() {
	
	var App = {
		"init" : function() {
			
			// Create the TweetsDbContext object via clone
			this._tweetsDbContext = TweetsDbContext;
			// Initialize the TweetsDbContext given a certain namespace aka connection string
			this._tweetsDbContext.init('dds.tweets');
			
			// TEST
			var tweet = new Object();
			tweet.content = '@ Alle Arteveldestudenten De Lijn & NMBS verwachten resp. op 7 & 9 oktober dat de dienstverlening verstoord zal zijn, check ook \'Mijn Dinar\'';
			tweet.Mood = 0;
			tweet.CreatedAt = new Date().getTime();
			tweet.UpdatedAt = null;
			tweet.DeletedAt = null;
			
			this._tweetsDbContext.addTweet(tweet);
			
			// Get tweet by Id
			var tweet1 = this._tweetsDbContext.getTweetById('5d645b5a-7fcc-4dab-83bd-4679daab79ae');
			console.log(tweet1);
			
			// Update tweet
			var result = this._tweetsDbContext.updateTweet(tweet1);
			tweet1 = this._tweetsDbContext.getTweetById('5d645b5a-7fcc-4dab-83bd-4679daab79ae');
			console.log(tweet1);
			
			// Soft delete tweet
			var result = this._tweetsDbContext.softDeleteTweet(tweet1.Id);
			tweet1 = this._tweetsDbContext.getTweetById('5d645b5a-7fcc-4dab-83bd-4679daab79ae');
			console.log(tweet1);
			
			// Soft undelete tweet
			var result = this._tweetsDbContext.softUnDeleteTweet(tweet1.Id);
			tweet1 = this._tweetsDbContext.getTweetById('5d645b5a-7fcc-4dab-83bd-4679daab79ae');
			console.log(tweet1);
		}
	};
	App.init();
	 
})();