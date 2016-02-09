var fs = require('fs'),
    os = require('os'),
    path = require('path');

module.exports = (function() {

    var defaultResponePath = path.dirname(require.main.filename) + '/responses',

        customResponsePath = os.homedir() + '/rs-mock/responses',

        hasCustomResponses = function() {
            return fs.existsSync(customResponsePath);
        },

        getResponsePath = function(teamId, params) {
            if (hasCustomResponses()) {
                return path.join(os.homedir() + "/RsMock/responses/teams", teamId, "pub", params, "response.json");
            } else {
                return path.join("./responses/teams", teamId, "pub", params, "response.json");
            }
        },

        responsePath = function() {
            return hasCustomResponses() ? customResponsePath : defaultResponePath;
        };

    return {
        getResponsePath: getResponsePath,
        customResponsePath: customResponsePath,
        defaultResponePath: defaultResponePath,
        hasCustomResponses: hasCustomResponses,
        responsePath: responsePath
    };

}());