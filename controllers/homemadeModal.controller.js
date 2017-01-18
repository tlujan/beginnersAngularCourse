(function (angular) {
	angular
		.module("application")
		.controller("homemadeModalController", function () {
			this.modalText = "R U RDY TO LRN NG?";
			this.showModal = true;

			this.getMessageAdd = function(message) {
				if(!parseInt(message, 10))
					return null;

				return parseInt(message, 10) + parseInt(message, 10);
			}
		});
} (window.angular))