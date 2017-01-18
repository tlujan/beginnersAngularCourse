(function (angular) {
	angular
		.module("application")
		.controller("exercise1Controller", function () {
			// private properties go here

			let vm = this;

			let title = "exercise title";

			// publics go here

			this.rollButtonText = "Roll Me";

			this.possibleColors = ["hotpink", "limegreen", "purple", "maroon", "dodgerblue"];

			this.controllerInitializedObject = {
				name: "Object 1",
				clickCount: 0,
				color: _getRandomColor()
			};

			this.objectArray = [this.controllerInitializedObject];

			// hoisted, private functions go here

			function _getRandomColor() {
				let randomColor = vm.possibleColors[Math.floor(Math.random() * vm.possibleColors.length)];

				return randomColor;
			}
		});
} (window.angular))