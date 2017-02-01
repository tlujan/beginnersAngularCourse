(function (angular) {
	angular
		.module("application")
		.factory("modalService", function() {
			let modal = {
				isLogin: false,
				isRegistration: false,
				isPrompt: false,
			};

			let modalDefault = {
				isLogin: false,
				isRegistration: false,
				isPrompt: false,
			};

			return {
				modal,
				showPrompt,
				showPromptFunc,
				close
			};

			function showPromptFunc() {
				return model.isPrompt;
			}

			function showPrompt(message, buttonObj1, buttonObj2) {
				let errorString = "You didn't use me right";

				if(!message || !buttonObj1 || typeof buttonObj1 !== 'object')
					throw new Error(errorString);

				if(buttonObj2 && typeof buttonObj2 !== 'object')
					throw new Error(errorString);

				modal.message = message;
				modal.buttonObj1 = buttonObj1;
				modal.buttonObj2 = buttonObj2;
				modal.isPrompt = true;
			}

			function close() {
				modal = modalDefault;
			}
		});
} (window.angular))
