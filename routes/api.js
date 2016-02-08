var app = require('express'),
    router = app.Router(),
    moment = require('moment'),
    utils = require('../utils/utils'),
    path = require('path'),
    fs = require('fs'),
    ejs = require('ejs');

// Routes GET
// ------------------------------------------------------------------

router.get('/teams/:team_id/pub/*', function(req, res) {

    var responsePath = utils.getResponsePath(req.params.team_id, req.params[0]);

    fs.readFile(responsePath, 'utf8', function(err, data) {
        if (err) {
            res.status(404);
        }
        // Run response through EJS renderer so custom responses can utilize EJS templating
        var response = ejs.render(data);
        response = JSON.parse(response);

        res.json(response);
    });

});

module.exports = router;