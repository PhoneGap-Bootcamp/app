var ContactsController = function () {};

ContactsController.prototype = {
	initialize: function () {

		//selecionar a div contatos
		var listacontatos = document.getElementById("contacts");



		//no sucesso
		function onSuccess(contacts) {
			var meuHTML = "<div class='page-item'>" + contacts.length + " resultados foram encontrados</div>";

			$.each(contacts, function (index, item) {
				meuHTML += "<div class='page-item'>" + item.name.formatted + "</div>";
			})
			listacontatos.innerHTML = meuHTML;
		};

		function onError(contactError) {
			//tivemos erro ao obter contatos
			alert('onError!');
		};



		$("#buscarbtn").on("touchstart", function () {
			// find all contacts with 'Bob' in any name field
			var options = new ContactFindOptions();
			options.filter = $("#contatoinput").val();
			options.multiple = true;
			navigator.contacts.find(["name", "displayName"], onSuccess, onError, options);
		});
	},
	destroy: function () {
		PageLoad.ajxHandle = null;
	}
};