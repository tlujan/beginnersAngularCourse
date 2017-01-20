(function (angular) {
	let applicationGlobalSettings = {
		title   : "WelcomeApp",
		version : 0.99
	};

	let testSettings = {
		test : "RAWR",
	};

	angular
		.module("application", ["ngRoute"])
		.constant("appSettings", applicationGlobalSettings)
		.constant("testSettings", testSettings)
		.config(
			function ($locationProvider, $routeProvider) {
				$locationProvider.html5Mode(true);

				$routeProvider
					.when("/exercise1", {
						templateUrl: "/partials/exercise1.partial.htm",
						controller: "exercise1Controller",
						controllerAs: "vm"
					})
					.when("/modal", {
						templateUrl: "/partials/homemadeModal.partial.htm",
						controller: "homemadeModalController",
						controllerAs: "vm"
					})
					.otherwise({
						templateUrl: "/partials/welcome.partial.htm",
						controller: "welcomeController",
						controllerAs: "vm"
					});
			})
} (window.angular))