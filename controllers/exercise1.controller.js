(function (angular) {
	angular
		.module("application")
		.controller("exercise1Controller", function() {
			// capturing controller scope here, used again in _getRandomColor
			let vm = this;

			// bindable publics
			this.title = "exercise title";

			this.rollButtonText = "Roll Me";

			this.lastObjectClickedText = null;

			this.possibleColors = [
				{
					name: "Brown",
					hex: "#A52A2A"
				},
				{
					name: "Blue",
					hex: "#0000FF"
				},
				{
					name: "Gainsboro",
					hex: "#DCDCDC"
				}
			];

			this.controllerInitializedObject = {
				name: "Object 1",
				clickCount: 0,
				color: _getRandomColor()
			};

			this.objectArray = [this.controllerInitializedObject];

			this.rollMethod = function () {
				this.rollButtonText = "I'm Rolled";
			};

			this.addNewObject = function () {
				let newObject = {
					name: "Object " + (this.objectArray.length + 1),
					clickCount: 0,
					color: _getRandomColor()
				};

				this.objectArray.push(newObject);
			};

			this.objectClicked = function (obj) {
				obj.clickCount++;
				this.lastObjectClickedText = obj.name + " clicked " + obj.clickCount + " times";
				console.log(this.lastObjectClickedText);
			};

			this.clearColorFilter = function() {
				if (this.filter.color === null) {
					// delete color from filter object, otherwise the filter will test for elements in an array
					// with color set to null...

					// setting this.filter.color equal to null is not equivalent to delete(this.filter.color)

					// please see http://adripofjavascript.com/blog/drips/the-delete-operator-in-javascript.html
					delete(this.filter.color);
				}
			};

			// hoisted, private functions
			function _getRandomColor() {
				// look, LOOK at the difference between "this" and "vm"
				// I had to capture the scope of the controller for this private function that is not really
				// a part of the Angular controller... _getRandomColor is something we have access to and use
				// internally
				console.log("_getRandomColor this vs. vm", this, vm);

				let randomColor = vm.possibleColors[Math.floor(Math.random() * vm.possibleColors.length)];

				// now that randomColor is actually an object, we return only the hex property we need
				return randomColor.hex;
			}
		});
} (window.angular))