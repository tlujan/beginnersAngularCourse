(function (angular) {
	angular
		.module("application")
		.controller("modalController", function() {
			this.isPrompt = false;
			this.isRegister = false;
			this.isLogin = false;
		});
} (window.angular))