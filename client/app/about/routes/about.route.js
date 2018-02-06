function aboutRoute($stateProvider) {
	$stateProvider
		.state({
			name: 'app.about',
			url: 'about',
			component: 'about'
		});
}

angular.module('BoilerTemple-site.about')
	.config(aboutRoute);

aboutRoute.$inject = ['$stateProvider'];
