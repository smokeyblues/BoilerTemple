function homeRoute ($stateProvider) {
	$stateProvider
		.state({
			name: 'app.home',
			url: '',
			component: 'home'
		});
}

angular.module('BoilerTemple-site.home')
.config(homeRoute);

homeRoute.$inject = ['$stateProvider'];
