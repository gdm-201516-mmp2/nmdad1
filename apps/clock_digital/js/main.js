// Class: DigitalClock
var DigitalClock = (function() {
	// Private variables
	var _id, _container, _isTicking = false;;
	
	// Constructor
	DigitalClock.prototype.constructor = DigitalClock;
	function DigitalClock(id, container) {
		_id = id;
		_container = container;
	}
	
	// Method: toString
	// String representation of object
	DigitalClock.prototype.toString = function() {
		return "Digital Clock with id " + _id;
	};
	
	// Method: startClock
	DigitalClock.prototype.startClock = function() {
		_isTicking = true;
		this.tickClock();
	};
	
	// Method: startClock
	DigitalClock.prototype.stopClock = function() {
		_isTicking = false;
	};
	
	// Method: tickClock
	DigitalClock.prototype.tickClock = function() {
		this.updateClock();
		
		if(_isTicking) {
			var self = this;
			window.setTimeout( function () { self.tickClock(); }, 200 );
		}
	};
	
	// Method: updateClock
	DigitalClock.prototype.updateClock = function() {
		var date = new Date();
		_container.innerHTML = date.toString();
	};
	
	return DigitalClock;
	
})();


(function () {
	var clock = new DigitalClock(0, document.querySelector('.clock'));
	clock.startClock();
})();