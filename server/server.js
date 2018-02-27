const express = require('express');
// const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const morgan = require('morgan');
const routes = require('./controllers/routes');
// const fs = require('fs');

let app = express();

let PORT = process.env.port || 3000;

// include static routes for serving up static html files.
app.use(express.static('public'));

// setup the logger
app.use(morgan('dev'));

// call our routes
routes(app);

app.listen(PORT, function(err) {
    if (err) {
        console.log(`SERVER ERROR: ${err}`);
        process.exit(1);
    } else {
        console.log(`SERVER IS UP ON ${PORT}`);
    }
});
