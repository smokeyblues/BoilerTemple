const assert = require('chai').assert;
const expect = require('chai').expect;
const request = require('request');


it('Server returning 200', function(done) {
    request('http://localhost:3000', function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    })
});
