(function (angular) {
	angular
		.module("application")
		.controller("modalLoginController", ["loginService", function(loginService) {
			this.login = loginService.login;
		}]);
}(window.angular));