var cors = require('cors');

// Set CORS Config Options
// --------------------------------------
module.exports =  (function() {
  var origin  = '*',
      methods = 'POST',
      allowedHeaders = 'accept, content-type, x-csrf-token';

  return {
    origin: origin,
    methods: methods,
    allowedHeaders: allowedHeaders
  };
  
}());
