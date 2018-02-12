const about = {
    bindings: {},
    controller: function () {
        let ctrl = this;

        ctrl.$onInit = function () {};
    },
    template:   `
    <h1>This is the about page</h1>

    `
};

angular.module('BoilerTemple-site.about')
    .component('about', about);

about.$inject = [];
