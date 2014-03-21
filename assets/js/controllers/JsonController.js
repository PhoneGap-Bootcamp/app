var JsonController = function () {};

JsonController.prototype = {
	initialize: function () {
		//mandar para nossa api
		app.api("exemplo", function (json) {

			var newHTML = "";

			$.each(json, function (index, item) {
				newHTML +=
					"<div class='page-item'>" +
					"<img class='nome-picture' src='http://lorempixel.com/80/80' alt='app'/><br/>" +
					"<div class='nome-item'>" + item.name + "</div><br/>" +
					"<div class='nome-age'>Idade: " + item.age + "</div><br/>" +
					"<div class='nome-email'>" + item.email + "</div><br/>" +
					"<div class='nome-address'>" + item.address + "</div><br/>" +
					"<div class='nome-company'>" + item.company + "</div><br/>" +
					"<div class='nome-gender'>" + item.gender + "</div>" + "</div>";
			});

			document.getElementById("json").innerHTML = newHTML;

		});
	},
	destroy: function () {
		// unset events
		// stop ajax
		// destroy components
		PageLoad.ajxHandle = null;
	}
};