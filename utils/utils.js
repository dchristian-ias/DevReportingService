var fs = require('fs'),
		path = require('path');

module.exports =  (function() {
	
	var getResponsePath = function(teamId, params) {
		var exists = fs.existsSync('./responses/custom/teams');
  	if (exists) {
 			return path.join("./responses/custom/teams", teamId, "pub", params, "response.json");
		} else {
 			return path.join("./responses/teams", teamId, "pub", params, "response.json");
		}
	};

	return {
		getResponsePath: getResponsePath
	};

}());