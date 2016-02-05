var express         = require('express'),
    router          = express.Router(),
    path 						= require('path'),
    fs 							= require('fs');

// Routes GET
// ------------------------------------------------------------------

router.get('/teams/:team_id/pub/*', function(req, res) {
	
	var responsePath = path.join("./responses/teams", req.params.team_id, "pub", req.params[0], "response.json");
	
	fs.readFile(responsePath, 'utf8', function (err,data) {
  	if (err) {
  		res.status(400);
  	}
  		res.json(data)
	});

});

module.exports = router;
