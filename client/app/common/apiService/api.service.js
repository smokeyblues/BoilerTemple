/**
 * @memberOf angular_module.BoilerTemple-site
 * @description This is an angular service that serves APIs defined in
 * ./server/controllers.
 * @param {object} $q
 * @param {object} $http
 * @return {{getMenu: getMenu, getEvents: getEvents, setSomething: setSomething}}
 */
function apiService($q, $http) {
/* This variable is for service level storage,
 it will not survive a browser reload
*/

// let variable = {};
    const service = {
        getMenu: getMenu,
    };
    return service;

    /**
     * @function getMenu
     * @description serves data returned from menuCtrl.get call from
     * server/controllers/menuCtrl.js
     * @return {*}
     */
    function getMenu() {
        return $http({
            method: 'GET',
            url: '/api/menu',
        });
    }

    // function internalFunction() {}
}

angular.module('BoilerTemple-site.common')
    .factory('apiService', apiService);

apiService.$inject = ['$q', '$http'];
