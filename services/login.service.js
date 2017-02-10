(function(angular) {
	angular
		.module("application")
		.factory("loginService", ["$q", "$timeout", "roomsService", function($q, $timeout, roomsService) {
			// this variable will keep track of our logged in user
			let loggedInUser = null;

			// this variable will help show the loading asterisk in the top-right corner
			let isServiceBusy = true;

			// actively watches Firebase authentication and propagates user results to our service variable
			// bindings update because of dirty timeout trick which forces a digest cycle after two seconds
			firebase.auth().onAuthStateChanged(function(user) {
				isServiceBusy = true;

				if (user) {
					loggedInUser = user;

					if (loggedInUser && !loggedInUser.displayName) {
						$q.when(firebase.database().ref("/users/" + loggedInUser.email.replace(".", "_")).once("value"))
							.then(function(results) {
								console.log("Setting logged in user from Firebase users table after login");
								loggedInUser = results.val();
								console.log("User is", loggedInUser);
							});
					}
				}
				else {
					// user is not logged in
					loggedInUser = null;
				}

				// use Angular's timeout so we can see the loading in our top-right login section
				// Angular's timeout automatically triggers a digest so you bindings update when it
				// completes
				$timeout(function() {
					roomsService.initRooms();
					isServiceBusy = false;
					console.log("Logged in user set: ", loggedInUser);
				}, 2000);
			});

			return {
				login,
				gitLogin,
				logout,
				fetchLoggedInUser,
				fetchIsLoginBusy
			};

			function login(usernameParam, passwordParam) {
				isServiceBusy = true;

				return firebase.auth().signInWithEmailAndPassword(usernameParam, passwordParam).then(_success);
			}

			function gitLogin() {
				isServiceBusy = true;

				return firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider()).then(_success);
			}

			function logout() {
				isServiceBusy = true;

				return firebase.auth().signOut();
			}

			function fetchLoggedInUser() {
				return loggedInUser;
			}

			function fetchIsLoginBusy() {
				return isServiceBusy;
			}

			function _success(result) {
				loggedInUser = result.user;

				console.log("Logged in user: ", !loggedInUser.displayName ? "no display name" : loggedInUser.displayName);
			}
		}]);
}(window.angular))
