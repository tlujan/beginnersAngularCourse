(function (angular) {
	angular
		.module("application")

		.controller("welcomeController", ["appSettings", "loginService", function(appSettings, loginService) {
			this.applicationLabel = appSettings.title + " v." + appSettings.version;

			// this will set logged in user to whoever is logged in at the time
			// this.loggedInUser = loginService.fetchLoggedInUser();

			// this will give me a bindable reference to our service function
			this.loggedInUser = loginService.fetchLoggedInUser;

			this.login = loginService.login; // returns null

			console.log("controller login is", this.login);
		}]);
} (window.angular))

// final class objective:

// perform a login on wlecome with an ng-model input
// log the user out on exercise one page with same service