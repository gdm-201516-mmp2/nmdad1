(function() {
	
	var App = {
		"init" : function() {
			
			// Create the TweetsDbContext object via clone
			this._tweetsDbContext = TweetsDbContext;
			// Initialize the TweetsDbContext given a certain namespace aka connection string
			this._tweetsDbContext.init('dds.tweets');
		}
	};
	App.init();
	 
})();