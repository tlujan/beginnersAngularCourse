(function (angular) {
	angular
		.module("application")
		.controller("nameOfTheController", function(dependency) {
			console.log(dependency);
		})
		.controller("welcomeController", function($route, appSettings, testSettings, nerdyAlert) {
			console.log(appSettings);
			console.log(testSettings);
			console.log(nerdyAlert.serviceProperty);

			this.service = nerdyAlert;

			this.applicationLabel = appSettings.title + " v." + appSettings.version;

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
		});
} (window.angular))