var Page1Controller = function () {};

Page1Controller.prototype = {
    initialize: function () {
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

                $("#internal-page .title-page").html(states[networkState]);
            } else if (connection == "true") {
                $("#internal-page .title-page").html("Temos internet");
            } else {
                $("#internal-page .title-page").html("Não temos internet");
            }
        }
        document.addEventListener("online", function () {
            connection = "true";

            $("#internal-page .title-page").html("Temos internet");
        }, false);

        document.addEventListener("offline", function () {
            connection = "false";

            $("#internal-page .title-page").html("Não temos internet");
        }, false);

        checkTypeConnection();
    },
    destroy: function () {
        // unset events
        // stop ajax
        PageLoad.ajxHandle = null;
    }
};