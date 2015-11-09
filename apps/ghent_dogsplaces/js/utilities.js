function getJSONByPromise(url){
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
}

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