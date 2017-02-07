(function (angular) {
	angular
		.module("application")
		.controller("roomsController", ["roomsService", function(roomsService) {
			this.$onInit = function() {
				this.fetchRooms = roomsService.fetchRooms;
			};
		}]);
}(window.angular));