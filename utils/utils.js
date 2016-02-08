var fs = require('fs'),
    os = require('os'),
    path = require('path');

module.exports = (function() {

    var customResponsePath = os.homedir() + '/rs-mock/responses',

        hasCustomResponses = function() {
            return fs.existsSync(customResponsePath);
        },

        getResponsePath = function(teamId, params) {
            if (hasCustomResponses()) {
                return path.join(os.homedir() + "/RsMock/responses/teams", teamId, "pub", params, "response.json");
            } else {
                return path.join("./responses/teams", teamId, "pub", params, "response.json");
            }
        };

    return {
        getResponsePath: getResponsePath,
        customResponsePath: customResponsePath,
        hasCustomResponses: hasCustomResponses
    };

}());