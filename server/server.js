const express = require('express'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose'),
      morgan = require ('morgan'),
      routes = require('./controllers/routes'),
      fs = require('fs');

let app = express();

let PORT = process.env.port || 3000;

// include static routes for serving up static html files.
app.use(express.static('public'));

// setup the logger
app.use(morgan('dev'));

// call our routes
routes(app);

app.listen(PORT, function(err){
    if(err) {
        console.log(`SERVER ERROR: ${err}`);
        process.exit(1);
    } else {
        console.log(`SERVER IS UP ON ${PORT}`);
    }
});
