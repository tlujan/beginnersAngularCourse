(function(angular) {
	angular
		.module("application")
		.controller("modalLoginController", function() {
			// jquery to wire up semantic ui toggle checkbox
			$(".ui.checkbox").checkbox();
		});
}(window.angular));