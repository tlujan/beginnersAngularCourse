(function (angular) {
	angular
		.module("application")
		.factory("roomsService", ["$q", "$http", function($q, $http) {
			// let's init the rooms only when this service is constructed... and never again...
			// may not be the best idea but I don't see rooms changing all that often in this
			// facility; loginService is then tasked with initializing this service because
			// only logged in users may view rooms

			let _roomsFromFirebase = null;

			return {
				initRooms,
				fetchRooms
			};

			function fetchRooms() {
				return _roomsFromFirebase;
			}

			function initRooms() {
				_roomsFromFirebase = null;


				// two ways to get the data... via rest endpoint using $http or Firebase wrapped in $q
				// this has no token, so security has to be lax on the backend
				//		return $http({
				//			url    : "https://confdeconflictor.firebaseio.com/rooms.json",
				//			method : "GET"
				//		})
				// this method, though, attaches authentication to the request
				return $q.when(firebase.database().ref("/rooms/").once("value"))
					.then(function(rooms) {
						if (rooms.val)
							rooms = rooms.val();	// using Firebase above
						else
							rooms = rooms.data;	// using $http above

						console.log(rooms.length + " rooms fetched");

						_roomsFromFirebase = rooms;
					});
			}
		}]);
}(window.angular));