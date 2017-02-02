(function (angular) {
	angular
		.module("application")
		.factory("modalService", function() {
			let modal = {
				isLogin        : false,
				isRegistration : false,
				isPrompt       : false
			};

			return {
				modal,
				showPrompt,
				close
			};

			// set up our modal for prompt
			function showPrompt(message, buttonObj1, buttonObj2) {
				// validation
				let errorString = "You didn't use me right";

				if (!message || !buttonObj1 || typeof buttonObj1 !== 'object')
					throw new Error(errorString);

				if (buttonObj2 && typeof buttonObj2 !== 'object')
					throw new Error(errorString);

				// set our modal object properties
				this.modal.message = message;
				this.modal.buttonObj1 = buttonObj1;
				this.modal.buttonObj2 = buttonObj2;
				this.modal.isPrompt = true;
			}

			// set the modal object to a pristine state without reassignment
			function close() {
				delete modal.buttonObj1;
				delete modal.buttonObj2;

				modal.isLogin = false;
				modal.isRegistration = false;
				modal.isPrompt = false;
				modal.message = null;
			}
		});
} (window.angular))
