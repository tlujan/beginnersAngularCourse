(function (angular) {
	angular
		.module("application")
		.controller("modalLoginController", ["$q", "loginService", function ($q, loginService) {
			this.$onInit = function() {
				// a form object to hold properties for our fields on login form (in view)
				// we do wish to clear this later so we're going to bind to vm (this controller)
				// in lieu of rootscope as we've been doing before with our forms
				this.form = {};

				// error handler for promises below
				this._processError = error => {
					this.error = error;

					console.log("Error logging in", error);
				}

				// success handler for promises below
				this._processSuccess = () => {
					this.closeModal();
				}

				// our actual login work, brought to us by the hard workin' loginService
				this.login = (userParam, passwordParam) => {
					return $q.when(loginService.login(userParam, passwordParam))
						.then(this._processSuccess)
						.catch(this._processError);
				};

				this.gitLogin = () => {
					// wrap our Firebase promise in $q so a digest cycle triggers
					return $q.when(loginService.gitLogin())
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

					console.log("Modal closed, login cleared");
				};
			}
		}]);
}(window.angular));