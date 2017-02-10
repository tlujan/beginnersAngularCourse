(function (angular) {
	angular
		.module("application")
		.factory("registerService", ["$http", function($http) {
			return {
				register
			};

			function register(data, password) {
				console.log("Register user entity: ", data);

				// return a Firebase promise; this updates our Authentication
				return firebase.auth().createUserWithEmailAndPassword(data.email, password)
					.then(function() {
						console.log("Firebase AUTH written for new user");

						// once we have Firebase Auth, let's also save our form data to the database
						return $http({
							url    : "https://confdeconflictor.firebaseio.com/users/" + data.email.replace(".", "_") + ".json",
							method : "PUT",
							data
						});
					})
					.then(function(results) {
						console.log("Firebase DATA written for new user");

						return results.data;
					});
			}
		}]);
}(window.angular));