(function (angular) {
	let applicationGlobalSettings = {
		title   : "Firebase Angular Application",
		version : 0.99,
		author  : "Josh R. Dunlavy"
	};

	angular
		.module("application", ["ngRoute"])
		.constant("appSettings", applicationGlobalSettings)
		.config(
			function ($locationProvider, $routeProvider) {
				$locationProvider.html5Mode(true);

				$routeProvider
					.when("/exercise1", {
						templateUrl: "/partials/exercise1.partial.htm",
						controller: "exercise1Controller",
						controllerAs: "vm"
					})
					.when("/exercise2", {
						templateUrl: "/partials/exercise2.partial.htm",
						controller: "exercise2Controller",
						controllerAs: "vm"
					})
					.otherwise({
						templateUrl: "/partials/welcome.partial.htm",
						controller: "welcomeController",
						controllerAs: "vm"
					});
			})
} (window.angular))