(function (angular) {
	angular
		.module("application")
		.controller("modalLoginController", ["loginService", function (loginService) {
			this.$onInit = function () {
				// create close bindable property from our parent component's close via require
				this.close = this.modal.close;

				// our actual login work, brought to us by loginService
				this.login = loginService.login;
			}
		}]);
}(window.angular));