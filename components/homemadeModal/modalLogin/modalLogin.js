(function (angular) {
	angular
		.module("application")
		.component("modalLogin", {
			templateUrl: "components/homemadeModal/modalLogin/modalLogin.htm",
			controller: "modalLoginController",
			controllerAs: "vm"
		});
} (window.angular))