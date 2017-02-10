"use strict";

(function(angular) {
	angular
		.module("application")
		.controller("roomController", ["$routeParams", function(param) {
			console.log(param);
			this.parameters = param;
		}]);
} (window.angular));
