// Class: WeatherWidget
var WeatherWidget = (function() {
	// Private variables
	var _id, _container, _url = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D2502265%20AND%20u%3D'c'&format=json&diagnostics=true&callback=", _data;
	
	// Constructor
	WeatherWidget.prototype.constructor = WeatherWidget;
	function WeatherWidget(id, container) {
		_id = id;
		_container = container;
	}
	
	// Method: toString
	// String representation of object
	WeatherWidget.prototype.toString = function() {
		return "Weather Widget with id " + _id;
	};
	
	// Method: toString
	// String representation of object
	WeatherWidget.prototype.loadData = function() {
		
		var self = this;
		getJSONByPromise(_url).then(
			function(data) {
				console.log(data);
				_data = data;
				self.update();
			},
			function(status) {
				console.log(status);
			}
		);
		
	};
	
	// Method: update
	WeatherWidget.prototype.update = function() {
		
		var channel = _data.query.results.channel;
		var units = channel.units;
		var wind = channel.wind;
		var atmosphere = channel.atmosphere;
		var item = channel.item;
		var condition = item.condition;
		
		_container.querySelector('.now__code>span').innerHTML = condition.text;
		_container.querySelector('.now__temp').innerHTML = condition.temp + '°' + units.temperature;
		_container.querySelector('.now__wind-speed').innerHTML = wind.speed + units.speed;
		_container.querySelector('.now__humidity').innerHTML = atmosphere.humidity;
		
	};
	
	return WeatherWidget;
	
})();