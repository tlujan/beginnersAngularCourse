(function (angular) {
	angular
		.module("application")
		.controller("welcomeController", ["$route", function($route) {
			this.simpleRoutes = linkToRoutes();

			function linkToRoutes() {
				let returnSimpleRoutes = [];

				angular.forEach($route.routes, function(r) {
					// we don't want redirect routes
					if (!!r.redirectTo) {
						return;
					}

					let simpleRoute = {
						url: r.originalPath,
						name: r.controller.replace(/controller/gi, "")
					};

					returnSimpleRoutes.push(simpleRoute);
				});

				console.log("This application has the following installed routes:", returnSimpleRoutes);

				return returnSimpleRoutes;
			}
		}]);
} (window.angular))