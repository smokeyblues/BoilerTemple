/**
 * @memberOf angular_module.BoilerTemple.widgets
 * @description provides the names and state reference of links for top menu
 * @return {{link: link, restrict: string, template: string}}
 */
function menuBar() {
	const directive = {
		link: link,
		restrict: 'EA',
		template: `
			<div class="menu-bar">
                <div id="nav-img"></div>
    			<menu-button data="{{button}}" ng-repeat="button in menuButtons">
		`,
	};
	return directive;

    /**
	 *
     * @param {object} scope
     * @param {object} element
     * @param {object} attrs
     */
	function link(scope, element, attrs) {
		scope.menuButtons = [
			{
				name: 'Home',
				sref: 'app.home',
			},
			{
				name: 'About',
				sref: 'app.about',
			},
		];
	}
}

angular
	.module('BoilerTemple-site.widgets')
	.directive('menuBar', menuBar);
