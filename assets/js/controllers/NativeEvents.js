var NativeEvents = function () {};

NativeEvents.prototype = {
	initialize: function () {
		//o device está pronto para usar as APIS do cordova!
		document.addEventListener("deviceready", function () {
			alert("DEVICE READY!");
		});

		//evento de pause
		document.addEventListener("pause", function () {
			alert("PAUSE EVENT!");
		});

		//evento de resumo
		document.addEventListener("resume", function () {
			alert("RESUME EVENT!");
		});

		//botao voltar
		document.addEventListener("backbutton", function () {
			alert("BACKBUTTON EVENT!");
		});

		//menu button
		document.addEventListener("menubutton", function () {
			alert("MENUBUTTON EVENT!");
		});

		//search button
		document.addEventListener("searchbutton", function () {
			alert("SEARCHBUTTON EVENT!");
		});

		//startcall button
		document.addEventListener("startcallbutton", function () {
			alert("STARTCALLBUTTON EVENT!");
		});

		//end call
		document.addEventListener("endcallbutton", function () {
			alert("ENDCALLBUTTON EVENT!");
		});


	},
	destroy: function () {
		PageLoad.ajxHandle = null;
	}
};