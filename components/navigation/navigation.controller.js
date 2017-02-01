"use strict";

(function(angular) {
	angular
		.module("application")
		// ns maps to navigationService
		.controller("navigationController", ["navigationService", function(ns) {
			this.navigation = ns.fetchRoutesPairs();
		}]);
} (window.angular));
