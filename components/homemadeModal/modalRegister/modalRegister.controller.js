(function (angular) {
	angular
		.module("application")
		.controller("modalRegisterController", ["registerService", function(registerService) {
			this.$onInit = function () {
				// our actual register work, brought to us by registerService
				this.register = registerService.register;
			}
		}]);
}(window.angular));