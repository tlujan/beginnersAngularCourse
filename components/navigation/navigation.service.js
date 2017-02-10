"use strict";

(function (angular) {
	angular
		.module("application")

		.factory("navigationService", ["$route", function ($route) {
			let applicationAngularRoutes = _fetchRoutesPairs();

			return {
				applicationAngularRoutes
			};

			function _fetchRoutesPairs() {
				let returnArrayOfUrlNamePairs = [];

				angular.forEach($route.routes, function (r) {
					// we don't want redirect routes
					if (!!r.redirectTo || !r.controller) {
						return;
					}

					let friendlyRouteObject = {
						url  : r.originalPath || '/',								// our url will be what Angular tracks as "originalPath"
						name : r.controller.replace(/controller/gi, "")		// use JavaScript replace() to trim controller path to just the name
					};

					returnArrayOfUrlNamePairs.push(friendlyRouteObject);
				});

				return _rearrangeItemToFirst("welcome", returnArrayOfUrlNamePairs);
			}

			function _rearrangeItemToFirst(itemName, array) {
				array.forEach(function (elementInArray, indexOfElement) {
					if (elementInArray.name && elementInArray.name.toLowerCase() === itemName.toLowerCase()) {
						array.splice(indexOfElement, 1);
						array.splice(0, 0, elementInArray);
					}
				});

				return array;
			}
		}]);
}(window.angular))