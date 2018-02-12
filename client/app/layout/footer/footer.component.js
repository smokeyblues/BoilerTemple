const footerComponent = {
	bindings: {},
	controller: function () {
		let ctrl = this;

	},

	template:`
	<h1>Boiler Temple &#169; 2018</h1>
	<h2>(just kidding about the copyright. This is an open source project.)</h2>

	`
};

angular.module('BoilerTemple-site.layout')
.component('footerComponent', footerComponent);

footerComponent.$inject = [];
