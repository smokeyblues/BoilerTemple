function rowdyMenuBar() {
	const directive = {
		link: link,
		restrict: 'EA',
		template: `
			<div class="menu-bar">
                <div id="nav-img"></div>
    			<rowdy-menu-button data="{{button}}" ng-repeat="button in menuButtons">
		`,
	};
	return directive;

	function link(scope, element, attrs) {
		scope.menuButtons = [
			{
				name: 'Home',
				sref: 'app.home'
			},
			{
				name: 'About',
				sref: 'app.about'
			}
		];

	}
}

angular
	.module('BoilerTemple-site.widgets')
	.directive('rowdyMenuBar', rowdyMenuBar);
