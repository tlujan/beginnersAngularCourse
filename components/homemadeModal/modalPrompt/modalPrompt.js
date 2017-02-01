(function (angular) {
	angular
		.module("application")
		.component("modalPrompt", {
			templateUrl  : "components/homemadeModal/modalPrompt/modalPrompt.htm",
			controller   : "modalPromptController",
			controllerAs : "vm"
		});
} (window.angular))