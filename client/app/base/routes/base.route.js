/**
 * @function baseRoute
 * @memberOf angular_module.BoilerTemple
 * @description provides the state for the base route.
 * @param {object} $stateProvider
 */
function baseRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app',
			abstract: true,
			url: '/',
			template: `
				<layout-component></layout-component>
			`,
		});
}

angular.module('BoilerTemple-site.base')
	.config(baseRoute);

baseRoute.$inject = ['$stateProvider'];
