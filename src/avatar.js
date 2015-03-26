var Avatar = Object.create(HTMLImageElement.prototype);

Avatar.loadJSON = function(path, callback) {
	var httpRequest = new XMLHttpRequest();
	httpRequest.onreadystatechange = function() {
		if (httpRequest.readyState === 4) {
			if (httpRequest.status === 200) {
				var data = JSON.parse(httpRequest.responseText);
				if (callback) callback(data);
			} else {
                throw new Error('Image cannot be found.');
            }
		}
	};
	httpRequest.open('GET', path, true);
	httpRequest.send();
};
