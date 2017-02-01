(function (angular) {
	angular
		.module("application")
		.controller("modalController", ["modalService", function(modalService) {
			this.modal = modalService.modal;
			this.modalService = modalService;

			modalService.showPrompt(
				"This is our first test",

				{
					text: "Show Alert",
					callback: function() { alert("test"); close(); }
				},

				{
					text: "Be Quiet",
					callback: function() { close(); }
				}
			);
		}]);
} (window.angular))