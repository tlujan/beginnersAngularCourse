(function(angular) {
	angular
		.module("application")
		.component("rooms", {
			templateUrl  : "components/rooms/rooms.htm",
			controller   : "roomsController",
			controllerAs : "vm"
		});
}(window.angular));