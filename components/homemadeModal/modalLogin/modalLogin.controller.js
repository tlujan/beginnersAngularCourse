(function (angular) {
	angular
		.module("application")
		.controller("modalLoginController", ["loginService", function (loginService) {
			this.$onInit = function() {
				// error handler for promises below
				this._processError = error => {
					this.error = error;

					console.log("Error logging in", error);
				};

				// success handler for promises below
				this._processSuccess = () => {
					this.closeModal();
				};

				// our actual login work, brought to us by the hard workin' loginService
				this.login = (userParam, passwordParam) => {
					return loginService.login(userParam, passwordParam)
						.then(this._processSuccess)
						.catch(this._processError);
				};

				this.gitLogin = () => {
					return loginService.gitLogin()
						.then(this._processSuccess)
						.catch(this._processError);
				};

				// call our parent's close modal routine in addition to clearing the login form
				this.closeModal = () => {
					// hide modal immediately
					this.modal.close();

					// clear these thereafter
					this.loginform.controls = { };
					this.loginform.$setPristine();
					this.error = null;

					console.log("Modal closed, login form cleared");
				};
			}
		}]);
}(window.angular));