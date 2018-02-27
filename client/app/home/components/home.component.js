const home = {
	bindings: {

	},
	controller: function($log) {
		let ctrl = this;
		ctrl.title = 'Boiler Temple';

		ctrl.$onInit = function() {
			$log.log('init Home');
		};
		ctrl.$postLink = function() {};
	},
	template: `
		<div class="home-container">
			<h1>This is the home page</h1>
		</div>
	`,

};

angular.module('BoilerTemple-site.home')
	.component('home', home);

home.$inject = [];
