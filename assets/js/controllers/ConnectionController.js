var ConnectionController = function () {};

ConnectionController.prototype = {
	initialize: function () {

		//funcao para verificar tipo de conexao, chamada abaixo
		function checkTypeConnection() {
			//variavel que grava todos nosso tipo de conexao
			var networkState = navigator.connection.type;

			//todos os tipos de conexoes em um objeto
			var states = {};
			states[Connection.UNKNOWN] = 'Sem conexão';
			states[Connection.ETHERNET] = 'Ethernet conexão';
			states[Connection.WIFI] = 'WiFi conexão';
			states[Connection.CELL_2G] = 'Cell 2G conexão';
			states[Connection.CELL_3G] = 'Cell 3G conexão';
			states[Connection.CELL_4G] = 'Cell 4G conexão';
			states[Connection.CELL] = 'Conexão generica';
			states[Connection.NONE] = 'Sem conexão';

			//imprimindo o tipo de conexao
			$("#connection-status h1").html(states[networkState]);
		}


		/*checando se temos internet*/
		if (navigator.onLine) {
			//temos internet
			$("#connection-status h1").html("Temos internet");
		} else {
			//não temos internet
			$("#connection-status h1").html("Não temos internet");
		}
		/*adicionando ouvidor de evento se mudar status de connecao*/
		document.addEventListener("online", function () {
			//opa voltamos com a  internet
			connection = "true";

			$("#connection-status h1").html("Temos internet");
		}, false);

		document.addEventListener("offline", function () {
			//opa estamos offline
			connection = "false";

			$("#connection-status h1").html("Não temos internet");
		}, false);


		//chamar função acima para verificar nosso tipo de conexao
		$("#connection-status h1").on("touchstart", function () {
			//chamar função
			checkTypeConnection();
		});


	},
	destroy: function () {
		PageLoad.ajxHandle = null;
	}
};