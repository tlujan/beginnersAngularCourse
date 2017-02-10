(function (angular) {
	angular
		.module("application")
		.controller("loggedInUserController", ["appSettings", "modalService", "loginService", function(appSettings, modalService, loginService) {
			this.$onInit = function() {
				this.applicationLabel = appSettings.title + " v." + appSettings.version;

				// login service bindings
				this.fetchLoggedInUser = loginService.fetchLoggedInUser;
				this.fetchIsLoginBusy = loginService.fetchIsLoginBusy;
				this.logout = loginService.logout;

				// modal service bindings
				this.showLogin = modalService.showLogin;
				this.showRegister = modalService.showRegister;

				this.logoutPrompt = function() {
					modalService.showPrompt(
						"Are you sure you want to log out?",
						{ text: "NO, PLEASE DON'T" },
						{ text: "DO IT!  DO IT!", callback: this.logout }
					);
				};

				this.logoutPrompt.bind(this);
			}
		}]);
}(window.angular));