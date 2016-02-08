var app         		= require('express'),
    router          = app.Router(),
    utils 					= require('../utils/utils'),
    path 						= require('path'),
    fs 							= require('fs');

// Routes GET
// ------------------------------------------------------------------

router.get('/teams/:team_id/pub/*', function(req, res) {

	var responsePath = utils.getResponsePath(req.params.team_id, req.params[0]);

	fs.readFile(responsePath, 'utf8', function (err, data) {
  	if (err) {
  		res.status(400);
  	}
  		data = JSON.parse(data);
  		res.json(data)
	});

});

module.exports = router;
