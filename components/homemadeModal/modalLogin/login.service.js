(function (angular) {
	angular
		.module("application")
		.factory("loginService", function() {
			let loggedInUser = null;

			return {
				login,
				gitLogin,
				logout,
				fetchLoggedInUser
			};

			function login(usernameParam, passwordParam) {
				return firebase.auth().signInWithEmailAndPassword(usernameParam, passwordParam).then(function(result) {
					// The signed-in user info
					let user = result.user;

					loggedInUser = user;

					console.log("Logged in user: ", loggedInUser.displayName);
				});
			}

			function gitLogin() {
				let githubAuthProvider = new firebase.auth.GithubAuthProvider();

				return firebase.auth().signInWithPopup(githubAuthProvider).then(function(result) {
					// This gives you a GitHub token to access GitHub API
					let token = result.credential.accessToken;
					// The signed-in user info
					let user = result.user;

					loggedInUser = user;

					console.log("Logged in user: ", loggedInUser.displayName);
				});
			}

			function logout() {
				console.log("Logged out " + loggedInUser.username);

				loggedInUser = null;
			}

			function fetchLoggedInUser() {
				return loggedInUser;
			}
		});
}(window.angular))
