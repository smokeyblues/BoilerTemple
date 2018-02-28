/**
 * @function SiteRun
 * @memberOf angular_module.BoilerTemple-site
 * @description boots up the app when triggered.
 * @param {object} $log
 * @constructor
 */
function SiteRun($log) {
	$log.log('Boiler Temple Site Up and Running');
}

angular.module('BoilerTemple-site')
	.run(SiteRun);
