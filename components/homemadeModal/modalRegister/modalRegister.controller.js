(function (angular) {
	angular
		.module("application")
		.controller("modalRegisterController", ["$q", "registerService", function($q, registerService) {
			this.$onInit = function() {
				this._processError = error => {
					this.error = error;
				};

				// success handler for promises below
				this._processSuccess = results => {
					this.closeModal();
				};

				// our actual register work, brought to us by the hard workin' registerService
				this.register = (registerFormData, password) => {
					return $q.when(registerService.register(registerFormData, password))
						.then(this._processSuccess)
						.catch(this._processError);
				};

				this.closeModal = () => {
					// hide modal immediately
					this.modal.close();

					// clear these thereafter
					this.registerform.controls = { };
					this.registerform.$setPristine();
					this.error = null;

					console.log("Modal closed, register form cleared");
				};
			}
		}]);
}(window.angular));