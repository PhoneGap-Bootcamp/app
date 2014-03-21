var AppInBrowserController = function () {};

AppInBrowserController.prototype = {
	initialize: function () {

		var browser;
		///quando tocar chamar touch
		$("#openbrowser").on("touchstart", function () {

			//browser
			browser = window.open('http://google.com', '_blank', 'location=yes');


			/* EVENTOS NÃO SUPORTADO BLACKBERRY 10*/

			//quando começar a carregar
			browser.addEventListener("loadstart", function () {
				alert("Começou a carregar");
			});
			//parou de carregar
			browser.addEventListener("loadstop", function () {
				alert("parou de carregar");
			});
			//erro no carregamento
			browser.addEventListener("loaderror", function () {
				alert("tivemos algum erro");
			});
			//fechou browser
			browser.addEventListener("exit", function () {
				alert("fechou browser");
			});
		})
	},
	destroy: function () {

		PageLoad.ajxHandle = null;
	}
};