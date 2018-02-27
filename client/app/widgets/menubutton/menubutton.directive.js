function menuButton() {
	const directive = {
		link: link,
		restrict: 'EA',
		template: `<div class="menu-button">
    <a ui-sref="{{button.sref}}">{{button.name}}</a>
</div>`,
	};
	return directive;

	function link(scope, element, attrs) {
		scope.button = scope.$eval(attrs.data);
	}
}

angular
	.module('BoilerTemple-site.widgets')
	.directive('menuButton', menuButton);
