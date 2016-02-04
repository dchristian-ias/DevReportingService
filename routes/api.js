var express         = require('express'),
    router          = express.Router(),
    cors            = require('cors'),
    creative			  = require('../responses/creative'),
    viewability			= require('../responses/viewability');

// Routes GET
// ------------------------------------------------------------------

router.get('/teams/4436/pub/viewability', function(request, response) {
	var data,
			query = request.query;

		// TODO -> String array, JSON PARSE ERROR
		groups = query.groups.replace(/[\[\]]/g, '');
		groups = groups.split(',');

		if(groups[0] === 'creative') {
			data = creative;
		} else {
			data = viewability;
		}

  response.json(data);
});



// Routes POST
// ------------------------------------------------------------------

router.post('/teams/4436/pub/viewability', function(request, response) {
	var data,
			query = request.query;

		// TODO -> String array, JSON PARSE ERROR
		groups = query.groups.replace(/[\[\]]/g, '');
		groups = groups.split(',');

		if(groups[0] === 'creative') {
			data = creative;
		} else {
			data = viewability;
		}

  response.json(data);
});

module.exports = router;
