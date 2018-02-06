function baseRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app',
			abstract: true,
			url: '/',
			template: `<layout-component></layout-component>`
		});
}

angular.module('BoilerTemple-site.base')
	.config(baseRoute);

baseRoute.$inject = ['$stateProvider'];
