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
