const headerComponent = {
	bindings: {},
	controller: function () {

	},
	template: `
	<div class="menu-container">
    	<menu-bar></menu-bar>
	</div>`
};

angular.module('BoilerTemple-site.layout')
	.component('headerComponent', headerComponent);

headerComponent.$inject = [];
