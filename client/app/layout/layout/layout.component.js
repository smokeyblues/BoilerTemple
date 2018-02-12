const layoutComponent = {
	bindings: {},
	controller: function () {
		let ctrl = this;

		ctrl.$onInit = function () {
			console.log('init layout');
		};
	},
	template: `
		<div class="main-container">
            <div class="top-container">
                <div class="left-container">
                    <header-component></header-component>
                </div>
                <div class="right-container">
                    <body-component></body-component>
                </div>
            </div>
			<div class="footer-container">
				<footer-component></footer-component>
			</div>
		</div>
	`
};

angular.module('BoilerTemple-site.layout')
	.component('layoutComponent', layoutComponent);

layoutComponent.$inject = [];
