function SiteRun($log) {
	$log.log('Boiler Temple Site Up and Running');
}

angular.module('BoilerTemple-site')
	.run(SiteRun);
