var JsonController = function () {};

JsonController.prototype = {
	initialize: function () {
		//mandar para nossa api que retornará um json
		app.api("exemplo", function (json) {

			//crio o html completo
			var newHTML = "";

			//o for para criar nossos elementos
			$.each(json, function (index, item) {

				//criando nossos elementos
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

			//adicionando o conteudo todo no html
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