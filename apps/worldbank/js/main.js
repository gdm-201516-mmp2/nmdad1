/*
*	Description: Worldbank
*	Modified: 10-11-2015
*	Version: 1.0.0
*	Author: Philippe De Pauw - Waterschoot
* 	-----------------------------------------------
*	Worldbank countries API: http://api.worldbank.org/countries/all?format=jsonP&prefix=jsonp_callback&per_page=300
* 
*   ?([{"page":1,"pages":1,"per_page":"300","total":264},[{"id":"ABW","iso2Code":"AW","name":"Aruba","region":{"id":"LCN","value":"Latin America & Caribbean (all income levels)"},"adminregion":{"id":"","value":""},"incomeLevel":{"id":"NOC","value":"High income: nonOECD"},"lendingType":{"id":"LNX","value":"Not classified"},"capitalCity":"Oranjestad","longitude":"-70.0167","latitude":"12.5167"}
*/

// Anonymous function executed when document loaded
(function() {
	
	// Describe an App object with own functionalities
	var App = {
		init: function() {
			this.WBCOUNTRIESAPIURL = "http://api.worldbank.org/countries/all?format=jsonP&prefix=jsonp_callback&per_page=300";
			this._dataCountries = null;// Variable for the list of countries
			
			// Handlebars Cache
			this._hbsCache = {};// Handlebars cache for templates
			this._hbsPartialsCache = {};// Handlebars cache for partials
			
			// Register listeners for list layout
			this.registerListenersForListLayout();
			
			this.loadCountriesFromWorldBankAPI();// Execute method loadCountriesFromWorldBankAPI(): Load countries from the Worldbank API
		},
		registerListenersForListLayout: function() {
			
			var self = this;
			
			var anchors = document.querySelectorAll('[data-listlayout]');
			if(anchors != null && anchors.length > 0) {
				_.each(anchors, function(anchor) {
					anchor.addEventListener('click', function(ev) {
						ev.preventDefault();
						
						var layout = this.dataset.listlayout;
						var target = this.dataset.target;
						
						if(target == 'countries-list') {
							self.updateCountriesUI('countries-' + layout, '#countries-' + layout + '-template');// Call updateCountriesUI method when successful
						}
						
						return false;
						console.log(ev);	
					});	
				});
			}
		},
		loadCountriesFromWorldBankAPI: function() {
			// Closure
			var self = this;
			
			// Load JSONP from corresponding API with certain URL
			// JSONP Callback is defined by a function name in this case
			// prefix=jsonp_callback. The Utils object contains a new function
			// which can handle the callback
			Utils.getJSONPByPromise(this.WBCOUNTRIESAPIURL).then(
				function(data) {
					if(data != null) {
						var countries = data[1]; // Get the countries from JSON (second item from array, first item is paging)
						var countriesFiltered = _.filter(countries, function(country) {
							return !(/\d/.test(country.iso2Code));
						});// First remove weird countries with LoDash + Assign data as value flor global variable _dataCountries within the App
						var badISO2Codes = ['XT', 'XN', 'ZG', 'ZF', 'OE', 'XS', 'XR', 'XU', 'XQ', 'XP', 'ZQ', 'XO', 'XN', 'XM', 'XL', 'ZJ', 'XJ', 'XY', 'XE', 'EU', 'XC', 'JG', 'XD'];
						self._dataCountries = _.filter(countriesFiltered, function(country) {
							var validCountry = true, i = 0;
							
							while(validCountry && i < badISO2Codes.length) {
								if(country.iso2Code == badISO2Codes[i]) {
									validCountry = false;
								} else {
									i++;
								}
							}
							
							return validCountry;
						});// Filter (weird codes: XT, XN, ZG, ZF, OE, XS, XR, XU, XQ, XP, ZQ, XO, XN, XM, XL, ZJ, XJ, XY, XE, EU, XC, JG)
						self._dataCountries = _.sortBy(self._dataCountries, function(country) {
							return country.name;
						});// Sorting on country name
						self.updateCountriesUI('countries-tiles', '#countries-tiles-template');// Call updateCountriesUI method when successful*/
					}	
				},
				function(status) {
					console.log(status);
				}
			);
		},
		updateCountriesUI: function(hbsTmplName, hbsTmplId) {
			if(!this._hbsCache[hbsTmplName]) {
				var src = document.querySelector(hbsTmplId).innerHTML;// Get the contents from the specified hbs template
				this._hbsCache[hbsTmplName] = Handlebars.compile(src);// Compile the source and add it to the hbs cache
			}	
			document.querySelector('.countries-list').innerHTML = this._hbsCache[hbsTmplName](this._dataCountries);
		}
	};
	
	App.init();// Intialize the application
	
})();