/**
 * @function SiteConfig
 * @memberOf angular_module.BoilerTemple-site
 * @description sets html5Mode to true and sets default route to '/'
 * @param {object} $locationProvider
 * @param {object} $urlRouterProvider
 * @constructor
 */
function SiteConfig($locationProvider, $urlRouterProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
}

angular.module('BoilerTemple-site')
	.config(SiteConfig);

SiteConfig.$inject = ['$locationProvider', '$urlRouterProvider'];
