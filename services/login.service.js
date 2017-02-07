(function (angular) {
	angular
		.module("application")
		.factory("loginService", ["$timeout", "roomsService", function($timeout, roomsService) {
			// this variable will keep track of our logged in user
			let loggedInUser = null;

			// this variable will help show the loading asterisk in the top-right corner
			let isLoading = true;

			// actively watches Firebase authentication and propagates user results to our service variable
			// bindings update because of dirty timeout trick which forces a digest cycle after two seconds
			firebase.auth().onAuthStateChanged(function(user) {
				isLoading = true;

				if (user)
					loggedInUser = user;
				else
					loggedInUser = null;

				$timeout(function() {
					console.log("Logged in user set: ", loggedInUser);
					roomsService.initRooms();
					isLoading = false;
				}, 2000);
			});

			return {
				login,
				gitLogin,
				logout,
				fetchLoggedInUser,
				fetchIsLoading
			};

			function login(usernameParam, passwordParam) {
				return firebase.auth().signInWithEmailAndPassword(usernameParam, passwordParam).then(_success);
			}

			function gitLogin() {
				return firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider()).then(_success);
			}

			function logout() {
				isLoading = true;
				return firebase.auth().signOut();
			}

			function fetchLoggedInUser() {
				return loggedInUser;
			}

			function fetchIsLoading() {
				return isLoading;
			}

			function _success(result) {
				loggedInUser = result.user;
				console.log("Logged in user: ", loggedInUser.displayName);
			}
		}]);
}(window.angular))
