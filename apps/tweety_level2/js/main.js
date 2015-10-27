(function() {
	
	var App = {
		"init" : function() {
			
			// Create the TweetsDbContext object via clone
			this._tweetsDbContext = TweetsDbContext;
			// Initialize the TweetsDbContext given a certain namespace aka connection string
			this._tweetsDbContext.init('dds.tweets');
			
			// TEST
			var tweet = new Object();
			tweet.Id = 1;
			tweet.content = '@ Alle Arteveldestudenten De Lijn & NMBS verwachten resp. op 7 & 9 oktober dat de dienstverlening verstoord zal zijn, check ook \'Mijn Dinar\'';
			tweet.Mood = 0;
			tweet.CreatedAt = new Date().getTime();
			tweet.UpdatedAt = null;
			tweet.DeletedAt = null;
			
			this._tweetsDbContext.addTweet(tweet);
		}
	};
	App.init();
	 
})();