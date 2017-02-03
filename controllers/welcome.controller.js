(function (angular) {
	angular
		.module("application")

		.controller("welcomeController", ["appSettings", "modalService", function (appSettings, modal) {
			this.applicationLabel = appSettings.title + " v." + appSettings.version;

			this.showLoginMessage = modal.showLogin;

			this.showAuthorDetails = function () {
				modal.showPrompt(
					this.applicationLabel + " created by: " + appSettings.author, null, { text: "Who Cares?" }
				);
			};

			this.showAuthorDetails.bind(this);

			function replaceApplicationLabel() {
				this.applicationLabel = "OK, something else!";
			}
		}]);
}(window.angular))