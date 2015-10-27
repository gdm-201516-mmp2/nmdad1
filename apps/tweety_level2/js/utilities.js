// Extend Number function
Number.prototype.padWithDigits = function (n) {  
	var txt = this.toString();
	while(txt.length < n) {
		txt = '0' + txt;
	}	
	return txt;  
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
    }
}