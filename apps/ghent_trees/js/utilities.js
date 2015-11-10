// Extend Number function
Number.prototype.padWithDigits = function (n) {  
	var txt = this.toString();
	while(txt.length < n) {
		txt = '0' + txt;
	}	
	return txt;  
};
Number.prototype.toRad = function () {  
	return this * Math.PI/180; 
};

// Extend Date function
Date.prototype.toShortDateString = function () {  
	var tempStr = '';
    
	var dayOfTheMonth = this.getDate();
	var month = this.getMonth();
	var year = this.getFullYear();
    
    tempStr += dayOfTheMonth.padWithDigits(2) + '-' + month.padWithDigits(2) + '-' + year.padWithDigits(4);
    
	return tempStr;  
};

var Utils = {
    // Get JSON from localstorage string by his/her namespace
    // Set JSON to localstorage string by his/her namespace
    store: function(namespace, data) {
        if(arguments.length > 1) {
            return localStorage.setItem(namespace, JSON.stringify(data));
        } else {
            var storedData = localStorage.getItem(namespace);
            return (storedData && JSON.parse(storedData)) || null;
        }
    },
    getJSONByPromise: function(url){
        return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('get', url, true);
            xhr.responseType = 'json';
            xhr.onload = function() {
                if (xhr.status == 200) {
                    var data = (!xhr.responseType)?JSON.parse(xhr.response):xhr.response;
                    resolve(data);
                } else {
                    reject(status);
                }
            };
            xhr.onerror = function() {
                reject(Error("Network Error"));
            };
            xhr.send();
        });
    },
    guid: function(){
        var i, random;
        var uuid = '';

        for (i = 0; i < 32; i++){
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }
            uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
        }
        return uuid;
    },
    pluralize: function (count, word) {
        return count === 1 ? word : word + 's';
    },
    trim: function(str){
        return str.replace(/^\s+|\s+$/gm,'');
    },
    timeToTwitterDateTimeString: function(time){
        var now = new Date();
        var timediff = (now.getTime() - time)/1000;
        if(timediff < 60){
            return Math.floor(timediff) + 's';
        }
        else if(timediff < 3600){
            return Math.floor(timediff/60) + 'm';
        }
        else if(timediff < 3600*24){
            return Math.floor(timediff/3600) + 'h';
        }
        else if(timediff < 3600*24*7){
            return Math.floor(timediff/(3600*24)) + 'd';
        }
        else{
            return new Date(time).toLocaleDateString();
        }
    },
    calculateDistanceBetweenTwoCoordinates: function(lat1, lng1, lat2, lng2){
        var R = 6371; // km
        var lat1 = parseFloat(lat1);
        var lng1 = parseFloat(lng1);
        var lat2 = parseFloat(lat2);
        var lng2 = parseFloat(lng2);

        var dLat = (lat2-lat1).toRad();
        var dLon = (lng2-lng1).toRad();
        var lat1 = lat1.toRad();
        var lat2 = lat2.toRad();

        var a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.sin(dLon/2) * Math.sin(dLon/2) * Math.cos(lat1) * Math.cos(lat2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
        var d = R * c
        return d;//in km
    },
    getGEOLocationByPromise: function(){
        return new Promise(function(resolve, reject) {
            if(Modernizr.geolocation){
                navigator.geolocation.getCurrentPosition(
                    function(position){
                        resolve(position);
                    },
                    function(error){
                        switch(error.code)
                        {
                            case error.PERMISSION_DENIED: console.log("User did not share geolocation data");break;
                            case error.POSITION_UNAVAILABLE: console.log("Could not detect current position");break;
                            case error.TIMEOUT: console.log("Retrieving position timed out");break;
                            default: console.log("Unknown Error");break;
                        }
                        reject(error);
                    },
                    {timeout:10000,enableHighAccuracy:true}
                )
            }
            else{
                reject("HTML5 Geolocation not supported!");
            }
        });
    }
}