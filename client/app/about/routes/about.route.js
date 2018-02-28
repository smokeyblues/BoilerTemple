/**
 *  @function aboutRoute
 *  @param {object} $stateProvider
 * @memberOf angular_module.BoilerTemple
 * @description This is an angularjs function that changes state to 'about'
 */
function aboutRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app.about',
			url: 'about',
			component: 'about',
		});
}

angular.module('BoilerTemple-site.about')
	.config(aboutRoute);

aboutRoute.$inject = ['$stateProvider'];
