const bodyComponent = {
	bindings: {

	},
	controller: function() {

	},
	template: `
	<div class="body-container">
    	<ui-view></ui-view>
	</div>
	`,
};

angular.module('BoilerTemple-site.layout')
.component('bodyComponent', bodyComponent);

bodyComponent.$inject = [];
