var LocalStorageController = function () {};

LocalStorageController.prototype = {
	initialize: function (novo) {

		var list = document.getElementById('itens-agenda');


		var db = openDatabase('phonegap', '1.0', 'PhoneGap Bootcamp', 2 * 1024 * 1024);

		function insertDados(nome, sobrenome, novo) {
			db.transaction(function (tx) {

				tx.executeSql('CREATE TABLE IF NOT EXISTS AGENDA(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, nome TEXT NOT NULL, sobrenome VARCHAR NOT NULL)');

				var query = "INSERT INTO AGENDA (nome, sobrenome) VALUES (?, ?);";
				tx.executeSql(query, [nome, sobrenome], function (transaction, results) {

					if (!results.rowsAffected) {
						alert("Error");
					}
				});
			});
		}


		function selectDataBase(novo) {
			db.transaction(function (tx) {


				tx.executeSql('SELECT * FROM AGENDA ORDER BY id DESC', [], function (tx, results) {
					var len = results.rows.length,
						i;


					for (i = 0; i < len; i++) {
						agenda = results.rows.item(i);
						if (agenda) {
							var el = document.createElement('div');
							el.setAttribute("class", "page-item");

							var div = document.createElement('h2');
							div.innerHTML = "# Nome: " + agenda.nome + " " + agenda.sobrenome;
							el.appendChild(div);

							list.appendChild(el);

						}

					}
				});

			});
		}

		$("#cadastrar-user").on("touchstart", function () {
			insertDados($("#campo-nome").val(), $("#campo-sobrenome").val(), true);

			var el = document.createElement('div');
			el.setAttribute("class", "page-item");

			var div = document.createElement('h2');
			div.innerHTML = "#" + " Nome: " + $("#campo-nome").val() + " " + $("#campo-sobrenome").val();

			el.appendChild(div);
			list.insertBefore(el, list.firstChild);
		});

		
		selectDataBase();


	},
	destroy: function () {

		PageLoad.ajxHandle = null;
	}
};