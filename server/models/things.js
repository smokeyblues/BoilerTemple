// This is an example schema... Duh.

const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
    name: String,
    stuff: String,
});

module.exports = mongoose.model('Thing', thingSchema);
