/*
*	Title: Worldbank Application
*	Modified: 19-11-2015
*	Version: 1.0.0
*	Author: Philippe De Pauw - Waterschoot
* 	-----------------------------------------------
*	Worldbank countries API: http://api.worldbank.org/countries/all?format=jsonP&prefix=jsonp_callback&per_page=300
*	Worldbank Forrest Area for certain country: http://api.worldbank.org/countries/be/indicators/AG.LND.FRST.ZS?format=jsonP&prefix=jsonp_callback&per_page=300
* 	Worldbank Mobile cellular subscriptions (per 100 people)
*	http://api.worldbank.org/countries/be/indicators/IT.CEL.SETS.P2?format=jsonP&prefix=jsonp_callback&per_page=300
*
*   ?([{"page":1,"pages":1,"per_page":"300","total":264},[{"id":"ABW","iso2Code":"AW","name":"Aruba","region":{"id":"LCN","value":"Latin America & Caribbean (all income levels)"},"adminregion":{"id":"","value":""},"incomeLevel":{"id":"NOC","value":"High income: nonOECD"},"lendingType":{"id":"LNX","value":"Not classified"},"capitalCity":"Oranjestad","longitude":"-70.0167","latitude":"12.5167"}
*/

// Anonymous function executed when document loaded
(function() {
	
	// Describe an App object with own functionalities
	var App = {
		init: function() {
			var self = this;
			
			this.WBCOUNTRIESAPIURL = "http://api.worldbank.org/countries/all?format=jsonP&prefix=jsonp_callback_{0}&per_page=300";
			this.WBFORRESTAREAPERCOUNTRYAPI = "http://api.worldbank.org/countries/{0}/indicators/AG.LND.FRST.ZS?format=jsonP&prefix=jsonp_callback_{1}&per_page=300";
			this.WBCELLULARSUBSCRIPTIONSCOUNTRYAPI = "http://api.worldbank.org/countries/{0}/indicators/IT.CEL.SETS.P2?format=jsonP&prefix=jsonp_callback_{1}&per_page=300";
			
			this._dataCountries = null;// Variable for the list of countries
			this._dataCountry = {
				"info": null,// Information of the country comes from the list of countries
				"forrestArea": null,// Variable for the list of forrestArea per year
				"cellularSubscriptions": null// Variable for the list of cellular subscriptions per year
			}// Variable for the details of a country
			
			// Handlebars Cache
			this._hbsCache = {};// Handlebars cache for templates
			this._hbsPartialsCache = {};// Handlebars cache for partials
			
			// Create a clone from the JayWalker object
			this._jayWalker = JayWalker;
			this._jayWalker.init();
			this._jayWalker._countryDetailsJSONPLoaded.add(function(iso2code) {
				self.loadDatasetsFromCountry(iso2code);// Test: load details data from country
			});
			
			this.registerNavigationToggleListeners();// Register All Navigation Toggle Listeners
			
			this.registerWindowListeners();// Register All Navigation Toggle Listeners
			
			// Register listeners for list layout
			this.registerListenersForListLayout();
			
			this.loadCountriesFromWorldBankAPI();// Execute method loadCountriesFromWorldBankAPI(): Load countries from the Worldbank API
		},
		registerNavigationToggleListeners: function() {
			var toggles = document.querySelectorAll('.navigation-toggle');
			
			if(toggles != null && toggles.length > 0) {
				var toggle = null;
				
				for(var i = 0; i < toggles.length; i++ ) {
					toggle = toggles[i];
					toggle.addEventListener('click', function(ev) {
						ev.preventDefault();
						
						document.querySelector('body').classList.toggle(this.dataset.navtype);
						
						return false;
					});	
				}
			}
		},
		registerWindowListeners: function() {
			window.addEventListener('resize', function(ev) {
				if(document.querySelector('body').classList.contains('offcanvas-open')) {
					document.querySelector('body').classList.remove('offcanvas-open');
				}
				
				if(document.querySelector('body').classList.contains('headernav-open')) {
					document.querySelector('body').classList.remove('headernav-open');
				}
			});
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
					});	
				});
			}
		},
		loadCountriesFromWorldBankAPI: function() {
			// Closure
			var self = this, url = String.format(this.WBCOUNTRIESAPIURL, new Date().getTime());
			
			// Load JSONP from corresponding API with certain URL
			// JSONP Callback is defined by a function name in this case
			// prefix=jsonp_callback. The Utils object contains a new function
			// which can handle the callback
			Utils.getJSONPByPromise(url).then(
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
			document.querySelector('.countries-list').innerHTML = this._hbsCache[hbsTmplName](this._dataCountries);// Write compiled content to the appropriate container
		},
		loadDatasetsFromCountry: function(iso2code) {
			var selectedCountry = _.find(this._dataCountries, function(country) {
				return country.iso2Code == iso2code;
			});
			if(selectedCountry != null && typeof selectedCountry != undefined) {
				this._dataCountry.info = selectedCountry;
			}
			this.loadForrestAreaFromCountryFromWorldBankAPI(iso2code);// Load forrest area dataset
			this.loadCellularSubscriptionsFromCountryFromWorldBankAPI(iso2code);// Load cellular usage dataset
		},
		loadForrestAreaFromCountryFromWorldBankAPI: function(iso2code) {
			// Closure
			var self = this, url = String.format(this.WBFORRESTAREAPERCOUNTRYAPI, iso2code, new Date().getTime() + Math.round(Math.random()*10));
			
			// Load JSONP from corresponding API with certain URL
			// JSONP Callback is defined by a function name in this case
			// prefix=jsonp_callback. The Utils object contains a new function
			// which can handle the callback
			Utils.getJSONPByPromise(url).then(
				function(data) {
					if(data != null) {
						var forrestArea = data[1]; // Get the forrest area from the selected country from JSON (second item from array, first item is paging)
						var forrestAreaFiltered = _.filter(forrestArea, function(forrestAreaPerYear) {
							return forrestAreaPerYear.value != null;
						});// First remove all years where value is null with LoDash
						forrestAreaFiltered = _.sortBy(forrestAreaFiltered, function(forrestAreaPerYear) {
							return forrestAreaPerYear.year;
						});// Sorting on year
						self._dataCountry.forrestArea = forrestAreaFiltered;// Add the forrest area data to the details of a country
						self.updateCountryDetailsUI('country-details', '#country-details-template');// Call updateCountryDetailsUI method when successful
					}	
				},
				function(status) {
					console.log(status);
				}
			);
		},
		loadCellularSubscriptionsFromCountryFromWorldBankAPI: function(iso2code) {
			// Closure
			var self = this, url = String.format(this.WBCELLULARSUBSCRIPTIONSCOUNTRYAPI, iso2code, new Date().getTime() + Math.round(Math.random()*10));
			
			// Load JSONP from corresponding API with certain URL
			// JSONP Callback is defined by a function name in this case
			// prefix=jsonp_callback. The Utils object contains a new function
			// which can handle the callback
			Utils.getJSONPByPromise(url).then(
				function(data) {
					if(data != null) {
						var cellularSubscriptions = data[1]; // Get the cellular subscriptions from the selected country from JSON (second item from array, first item is paging)
						var cellularSubscriptionsFiltered = _.filter(cellularSubscriptions, function(subscr) {
							return subscr.value != null;
						});// First remove all years where value is null with LoDash
						cellularSubscriptionsFiltered = _.sortBy(cellularSubscriptionsFiltered, function(subscr) {
							return subscr.year;
						});// Sorting on year
						self._dataCountry.cellularSubscriptions = cellularSubscriptionsFiltered;// Add the cellular subscriptions data to the details of a country
						self.updateCountryDetailsUI('country-details', '#country-details-template');// Call updateCountryDetailsUI method when successful
					}	
				},
				function(status) {
					console.log(status);
				}
			);
		},
		updateCountryDetailsUI: function(hbsTmplName, hbsTmplId) {
			if(!this._hbsCache[hbsTmplName]) {
				var src = document.querySelector(hbsTmplId).innerHTML;// Get the contents from the specified hbs template
				this._hbsCache[hbsTmplName] = Handlebars.compile(src);// Compile the source and add it to the hbs cache
			}	
			document.querySelector('.country-details').innerHTML = this._hbsCache[hbsTmplName](this._dataCountry);// Write compiled content to the appropriate container
			this.createForrestAreaGraphForCountry();
			this.createCellularSubscriptionsGraphForCountry();
		},
		createForrestAreaGraphForCountry: function() {
			if(this._dataCountry.forrestArea != null) {
				var labels = [], series = [];
				_.each(this._dataCountry.forrestArea.reverse(), function(item) {
					labels.push(item.date);
					series.push(parseFloat(item.value));
				});
	
				var options = {
					low: _.min(_.pluck(this._dataCountry.forrestArea, 'value')),
					hight: _.max(_.pluck(this._dataCountry.forrestArea, 'value'))
				};
				
				var data = {
					labels: labels,
					series: [series]
				};
				// Create a new line chart object where as first parameter we pass in a selector that is resolving to our chart container element. The Second parameter is the actual data object.
				new Chartist.Line('.country-details-forrestarea-chart', data, options);	
			}
		},
		createCellularSubscriptionsGraphForCountry: function() {
			if(this._dataCountry.cellularSubscriptions != null) {
				var labels = [], series = [];
				_.each(this._dataCountry.cellularSubscriptions.reverse(), function(item) {
					labels.push(item.date);
					series.push(parseFloat(item.value));
				});
	
				var options = {
					low: _.min(_.pluck(this._dataCountry.cellularSubscriptions, 'value')),
					hight: _.max(_.pluck(this._dataCountry.cellularSubscriptions, 'value'))
				};
				
				var data = {
					labels: labels,
					series: [series]
				};
				// Create a new line chart object where as first parameter we pass in a selector that is resolving to our chart container element. The Second parameter is the actual data object.
				new Chartist.Line('.country-details-cellularsubscriptions-chart', data, options);		
			}
		}
	};
	
	App.init();// Intialize the application
	
})();