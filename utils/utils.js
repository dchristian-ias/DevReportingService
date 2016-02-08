var fs = require('fs'),
		os = require('os'),
		path = require('path');

module.exports =  (function() {
	
	var getResponsePath = function(teamId, params) {

		var exists = fs.existsSync(os.homedir() + '/mockRs/responses');
		
  	if (exists) {
 			return path.join(os.homedir() + "/mockRs/responses/teams", teamId, "pub", params, "response.json");
		} else {
 			return path.join("./responses/teams", teamId, "pub", params, "response.json");
		}
	};

	return {
		getResponsePath: getResponsePath
	};

}());