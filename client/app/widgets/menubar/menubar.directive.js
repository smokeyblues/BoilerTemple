function rowdyMenuBar() {
	const directive = {
		link: link,
		restrict: 'EA',
		template: `
			<div>
                <div id="nav-img"></div>
    			<h1>Menu Bar</h1>
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
