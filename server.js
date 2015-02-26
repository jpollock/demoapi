// Get the packages we need
var express = require('express');

// Create our Express application
var app = express();

// Use environment defined port or 3000
var port = process.env.PORT || 3000;

// Create our Express router
var router = express.Router();

router.get('/productInformation', function(req, res) {
  res.contentType('application/json');
  res.json({type: 'productInformation', data: {id: 1234, name: 'Hello', shortDescription: 'This is a shortDescription.', longDescription: 'This is a much longer description. How about that?', url:'http://www.mashery.com'}});
});

router.get('/search', function(req, res) {
  res.contentType('application/json');
  res.json({type: 'search', data: {id: 1234, name: 'Hello', shortDescription: 'This is a shortDescription.', longDescription: 'This is a much longer description. How about that?', url:'http://www.mashery.com'}});
});

router.get('/animal', function(req, res) {
  res.contentType('application/json');
  res.json({type: 'animal', data: {id: 1234, name: 'Hello', shortDescription: 'This is a shortDescription.', longDescription: 'This is a much longer description. How about that?', url:'http://www.mashery.com'}});
});

router.get('/accountDetails', function(req, res) {
  res.contentType('application/json');
  res.json({type: 'accountDetails', data: {id: 1234, name: 'Hello', shortDescription: 'This is a shortDescription.', longDescription: 'This is a much longer description. How about that?', url:'http://www.mashery.com'}});
});


// Register all our routes with /api
app.use('/remote/v1/account/', router);


// Start the server
app.listen(port);
console.log('Insert beer on port ' + port);
