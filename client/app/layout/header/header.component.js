const headerComponent = {
	bindings: {},
	controller: function () {

	},
	template: `
	<div class="menu-container">
    	<rowdy-menu-bar></rowdy-menu-bar>
	</div>`
};

angular.module('BoilerTemple-site.layout')
	.component('headerComponent', headerComponent);

headerComponent.$inject = [];
