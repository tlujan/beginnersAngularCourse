(function (angular) {
	angular
		.module("application")
		.controller("modalPromptController", function() {
			this.$onInit = function () {
				// create properties from our parent modal component's (require) properties
				this.close = this.modal.close;
				this.modal = this.modal.modal;
			};
		});
} (window.angular))