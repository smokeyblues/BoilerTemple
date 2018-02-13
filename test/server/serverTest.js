const assert = require('chai').assert;
const server = require('../server/server.js');

describe('server', function () {
    before(function () {
        server.listen(8000);
    });

    after(function () {
        server.close();
    });
});