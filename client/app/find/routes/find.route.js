/**
 * @memberOf angular_module.BoilerTemple-site
 * @description changes state to 'find' state
 * @param {object} $stateProvider
 */
function findRoute($stateProvider) {
    $stateProvider
        .state({
            name: 'app.find',
            url: 'find',
            component: 'find',
        });
}

angular.module('BoilerTemple-site.find')
    .config(findRoute);

findRoute.$inject = ['$stateProvider'];
