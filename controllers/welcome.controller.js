(function (angular) {
	angular
		.module("application")

		.controller("welcomeController", ["routeList", "appSettings", function(routeList, appSettings) {
			this.applicationLabel = appSettings.title + " v." + appSettings.version;

			this.activeRoutes = routeList.fetchRoutesPairs();
		}]);
} (window.angular))