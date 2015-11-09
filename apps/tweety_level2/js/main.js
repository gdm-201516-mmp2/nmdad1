(function() {
	
	var App = {
		"init" : function() {
			
			// Create the TweetsDbContext object via clone
			this._tweetsDbContext = TweetsDbContext;
			// Initialize the TweetsDbContext given a certain namespace aka connection string
			this._tweetsDbContext.init('dds.tweets');
			
			// Cache Create Tweet Form
			this._createTweetForm = document.querySelector('#tweet-create-frm');
			
			// Cache Handlebars templates
			this.hbsCache = {};// Handlebars cache for templates
			this.hbsParialsCache = {};// Handlebars Partial cache for templates
			
			// Regsiter Listeners
			this.registerListeners();
						
			this.updateTweetsUI();// Callback: Load Tweets from DbContext
		},
		"registerListeners": function() {
			if(this._createTweetForm != null) {
				
				var self = this;
				
				this._createTweetForm.querySelector('#txtTweetContent').addEventListener('input', function(ev) {
					var str = this.value;
					Utils.trim(str);
					self.updateTweetCharsAmount(str);
				});
				
				this._createTweetForm.addEventListener('submit', function(ev) {
					ev.preventDefault();
					
					//Get selected value of RadioButtonGroup
					var rdbtnGroupMood = document.querySelector('.rdbg-mood input[type="radio"]:checked');

					// Create a new Tweet Object
					var tweet = new Object();
					tweet.Content = Utils.trim(this.querySelectorAll('[name="txtTweetContent"]')[0].value);
					tweet.Mood = (rdbtnGroupMood != null)?self.convertMoodStringToMood(rdbtnGroupMood.value):Moods.HAPPY;
			
					// Add Tweet via the DbContext to the store
					var addedTweet = self._tweetsDbContext.addTweet(tweet);
					if(addedTweet != null) {
						self.updateTweetsUI();
					}
					
					return false;
				});
			}	
		},
		"updateTweetCharsAmount": function(str) {
			if(this._createTweetForm != null) {
				
				this._createTweetForm.querySelector('.txtAmountChars').innerHTML = 280 - str.length;
			}
		},
		"updateTweetsUI": function() {
			var tweets = this._tweetsDbContext.getTweets(); // Get all tweets
			if(tweets != null) {	
				if(!this.hbsCache['tweets']) {
					var src = document.querySelector('#tweets-template').innerHTML;// Get the contents from the specified hbs template
					this.hbsCache['tweets'] = Handlebars.compile(src);// Compile the source and add it to the hbs cache
				}
				document.querySelector('.tweets').innerHTML = this.hbsCache['tweets'](tweets);
				
				var self = this;
				// Register remove listeners on each tweet
				var tweetRemoveElements = document.querySelectorAll('.tweet .tweet__remove');
				for(var i = 0; i < tweetRemoveElements.length; i++) {
					tweetRemoveElements[i].addEventListener('click', function(ev) {
						ev.preventDefault();
						
						var tweetId = this.parentElement.dataset.id;
						self._tweetsDbContext.deleteTweet(tweetId);
						
						this.parentElement.parentElement.removeChild(this.parentElement);
						
						return false;
					});
				}
			}
		},
		"convertMoodStringToMood": function(moodStr){
			switch(moodStr){
				case 'Neutral':return Moods.NEUTRAL;
				case 'Happy':return Moods.HAPPY;
				case 'Sad':return Moods.SAD;
				default:return Moods.NEUTRAL;
			}
		}	
	};
	App.init();
	 
})();