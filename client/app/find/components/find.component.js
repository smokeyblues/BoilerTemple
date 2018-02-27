const find = {
    bindings: {},
    controller: function() {
        let ctrl = this;

        ctrl.$onInit = function() {
        };
    },
    template: `
    <h1>This is the FIND page.</h1>
    `,
};

angular.module('BoilerTemple-site.find')
    .component('find', find);

find.$inject = [];
