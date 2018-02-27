let mongoose = require('mongoose');

let thingSchema = mongoose.Schema({
    name: String,
    stuff: String,
});

module.exports = mongoose.model('Thing', thingSchema);
