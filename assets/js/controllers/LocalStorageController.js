var LocalStorageController = function () {};

LocalStorageController.prototype = {
	initialize: function () {


		//pegando nossa listagem
		var list = document.getElementById('itens-agenda');


		//criando nosso banco de dados,
		var db = openDatabase('phonegap', '1.0', 'PhoneGap Bootcamp', 2 * 1024 * 1024);


		//função para inserir dados, recebe nome sobrenome
		function insertDados(nome, sobrenome) {

			//iniciando nossa transação
			db.transaction(function (tx) {

				//criando nossa tabela se não existir com id nome e sobrenome
				tx.executeSql('CREATE TABLE IF NOT EXISTS AGENDA(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT, nome TEXT NOT NULL, sobrenome VARCHAR NOT NULL)');

				//nossa query para inserir
				var query = "INSERT INTO AGENDA (nome, sobrenome) VALUES (?, ?);";

				//executa e se tiver sucesso tivemos um callback
				tx.executeSql(query, [nome, sobrenome], function (transaction, results) {

					if (!results.rowsAffected) {
						alert("Error");
						//aconteceu algum error
					} else {
						//tivemos sucesso
					}
				});
			});
		}

		//exibir todos os dados
		function selectDataBase() {
			//iniciando nossa transação
			db.transaction(function (tx) {

				//nossa query para exibir e se tiver sucesso teremos um call back
				tx.executeSql('SELECT * FROM AGENDA ORDER BY id DESC', [], function (tx, results) {
					//pegaremos o total de dados
					var len = results.rows.length,
						i;

					//nosso loop
					for (i = 0; i < len; i++) {
						//obtendo o item i 
						agenda = results.rows.item(i);
						//verifica se existe para evitar erros
						if (agenda) {
							//cria o elemento


							//div de agenda
							var el = document.createElement('div');
							el.setAttribute("class", "page-item");

							//adicionando nome e sobrenome
							var div = document.createElement('h2');
							div.innerHTML = "Nome: " + agenda.nome + " " + agenda.sobrenome;
							el.appendChild(div);

							list.appendChild(el);

						}

					}
				});

			});
		}


		//ao tocar
		$("#cadastrar-user").on("touchstart", function () {
			//inserir nossos dados
			insertDados($("#campo-nome").val(), $("#campo-sobrenome").val(), true);


			//criando elementos
			var el = document.createElement('div');
			el.setAttribute("class", "page-item");

			var div = document.createElement('h2');
			div.innerHTML = "#" + " Nome: " + $("#campo-nome").val() + " " + $("#campo-sobrenome").val();

			//adicionando na listagem
			el.appendChild(div);

			//adicionando o elemento em cima
			list.insertBefore(el, list.firstChild);
		});


		//assim que abrir o controller mostra o select
		selectDataBase();


		/*
		
		EXEMPLO DE DELETAR O ITEM
		
		deletarItem = function (id) {
			db.transaction(function (tx) {
				tx.executeSql("DELETE FROM agenda WHERE ID=?", [id],
					funcaoDeSucesso,TivemosUmError);
			});
			}
*/


	},
	destroy: function () {

		PageLoad.ajxHandle = null;
	}
};