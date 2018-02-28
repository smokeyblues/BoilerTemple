/**
 * @memberOf angular_module.BoilerTemple.widgets
 * @description returns a list of links to populate the menu bar.
 * @return {{link: link, restrict: string, template: string}}
 */
function menuButton() {
	const directive = {
		link: link,
		restrict: 'EA',
		template: `<div class="menu-button">
    <a ui-sref="{{button.sref}}">{{button.name}}</a>
</div>`,
	};
	return directive;

    /**
	 *
     * @param {object} scope
     * @param {object} element
     * @param {object} attrs
     */
	function link(scope, element, attrs) {
		scope.button = scope.$eval(attrs.data);
	}
}

angular
	.module('BoilerTemple-site.widgets')
	.directive('menuButton', menuButton);
