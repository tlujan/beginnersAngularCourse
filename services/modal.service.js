(function (angular) {
	angular
		.module("application")
		.factory("modalService", function() {
			let modalPieces = {};

			return {
				showPromptModal,
				closePrompt
			};

			function showPromptModal(message, buttonObj1, buttonObj2) {
				let errorString = "You didn't use me right";

				if(!message || !buttonObj1 || typeof buttonObj1 !== 'object')
					throw new Error(errorString);

				if(buttonObj2 && typeof buttonObj2 !== 'object')
					throw new Error(errorString);

				modalPieces = {
					message,
					buttonObj1,
					buttonObj2
				};
			}

			function closePrompt() {
				modalPieces = {};
			}
		});
} (window.angular))
