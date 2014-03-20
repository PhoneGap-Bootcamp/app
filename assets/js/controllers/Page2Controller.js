var Page2Controller = function () {};

Page2Controller.prototype = {
	initialize: function () {
		function checkConnection() {

			function checkTypeConnection() {

				if (connection == "") {
					var networkState = navigator.connection.type;

					var states = {};
					states[Connection.UNKNOWN] = 'Sem conexão';
					states[Connection.ETHERNET] = 'Ethernet conexão';
					states[Connection.WIFI] = 'WiFi conexão';
					states[Connection.CELL_2G] = 'Cell 2G conexão';
					states[Connection.CELL_3G] = 'Cell 3G conexão';
					states[Connection.CELL_4G] = 'Cell 4G conexão';
					states[Connection.CELL] = 'Conexão generica';
					states[Connection.NONE] = 'Sem conexão';

					$("#connection-status h1").html(states[networkState]);
				} else if (connection == "true") {
					$("#connection-status h1").html("Temos internet");
				} else {
					$("#connection-status h1").html("Não temos internet");
				}
			}
			document.addEventListener("online", function () {
				connection = "true";

				$("#connection-status h1").html("Temos internet");
			}, false);

			document.addEventListener("offline", function () {
				connection = "false";

				$("#connection-status h1").html("Não temos internet");
			}, false);

			checkTypeConnection();

		}
	},
	destroy: function () {
		alert("destroy Page2 Controller, destroy elements, scroll and ajax");

		PageLoad.ajxHandle = null;
	}
};