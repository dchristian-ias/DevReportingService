var port,
    corsOptions = require('./config/cors'),
    bodyParser = require('body-parser'),
    apiRoutes = require('./routes/api'),
    express = require('express'),
    cors = require('cors'),
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
console.log('Magic happens on port ' + port);

module.exports = app;