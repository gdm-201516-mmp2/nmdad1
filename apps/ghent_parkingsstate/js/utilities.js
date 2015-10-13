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

function convertGhentParkingsStateToString(availableCapacity, totalCapacity) {
    var prec = availableCapacity/totalCapacity*100;
    if(prec > 60) {
        return 'VRIJ';
    } else if (prec < 10) {
        return 'VOL';
    } else {
        return availableCapacity;
    }
}

function convertGhentParkingsStateToSelector(availableCapacity, totalCapacity) {
    var prec = availableCapacity/totalCapacity*100;
    if(prec > 40) {
        return 'parking__state--green';
    } else if (prec < 10) {
        return 'parking__state--red';
    } else {
        return 'parking__state--orange';
    }
}