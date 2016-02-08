var port,
    corsOptions = require('./config/cors'),
    bodyParser = require('body-parser'),
    apiRoutes = require('./routes/api'),
    utils = require('./utils/utils'),
    express = require('express'),
    cors = require('cors'),
    path = require('path'),
    app = express();


// APP CONFIG
// ------------------------------------------------------------------
port = process.env.PORT || 3000;
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


// REGISTER ROUTES
// ------------------------------------------------------------------
app.use('/reportingservice/api', apiRoutes);


// START SERVER => nodemon ./app.js localhost 3000
// ------------------------------------------------------------------
app.listen(port);

var defaultResponePath = path.resolve(__dirname) + '/responses';
var responsePath = utils.hasCustomResponses() ? utils.customResponsePath : defaultResponePath;

console.log('Magic happens on port ' + port);
console.log('Mock responses being pulled from: ' + responsePath);

module.exports = app;