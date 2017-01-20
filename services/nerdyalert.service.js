"use strict";

(function (angular) {
	angular
		.module("application")
		.factory("nerdyAlert", function () {
			let serviceProperty = { message: "test service" };

			return {
				callFunction,
				serviceProperty
			};

			function _privateCallWork() {
				serviceProperty.message = "I changed";
				alert(serviceProperty.message);
			}

			function callFunction() { _privateCallWork(); }
		});
} (window.angular))