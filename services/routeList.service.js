"use strict";

(function(angular) {
	angular
		.module("application")

		.factory("routeList", ["$route", function ($route) {
			return {
				fetchRoutesPairs
			};

			function fetchRoutesPairs() {
				let returnArrayOfUrlNamePairs = [];

				angular.forEach($route.routes, function (r) {
					// we don't want redirect routes
					if (!!r.redirectTo) {
						return;
					}

					let friendlyRouteObject = {
						url  : r.originalPath,										// our url will be what Angular tracks as "originalPath"
						name : r.controller.replace(/controller/gi, "")		// use JavaScript replace() to trim controller path to just the name
					};

					returnArrayOfUrlNamePairs.push(friendlyRouteObject);
				});

				return returnArrayOfUrlNamePairs;
			}
		}]);
} (window.angular))