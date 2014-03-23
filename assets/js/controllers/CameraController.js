var CameraController = function () {};

CameraController.prototype = {
	initialize: function () {

		/* INICIALIZANDO O AUTH NO PARSE - MINHA CONTA -*/
		Parse.initialize("FqlKJalgPPpdenKyKNoINqxiBcVzn4L77rGM2HbH", "6OvzhlviPIQfkQP47NCOLCz5JZD3YsNd0vpGvsEz");


		//lista de fotos
		var listasdefotos = Parse.Object.extend("imagens_phonegapbootcamp");
		//query
		var query = new Parse.Query(listasdefotos);
		//pegando nossa div de fotos
		var listfotos = document.getElementById("fotos");

		//buscando fotos
		query.find().then(function (listagem) {
			//loop
			$.each(listagem, function (index, item) {
				//criando nossa imagem e adicionando
				img = document.createElement("div");
				img.setAttribute("class", "imagem");
				img.css("background-image", item.attributes.foo._url);
				listfotos.appendChild(img);
			});
		});

		/* AO TOCAR NO BOTAO ABRA MINHA CAMERA*/
		$("#open-camera").on("touchstart", function () {
			navigator.camera.getPicture(onSuccess, onFail, {
				quality: 50, //qualidade
				destinationType: Camera.DestinationType.DATA_URL, //retornar nossa base64
			});
		});

		function onSuccess(imageData) {
			$("#status-cam").html("enviando foto...");
			//imageData é nossa base64

			//quando tirar foto, criar 
			var img = new Image();
			img.width = 100;
			img.height = 100;
			img.src = "data:image/jpeg;base64," + imageData;

			//adicionar na listagem
			document.getElementById("fotos").appendChild(img);

			/* PARASE */
			var file = new Parse.File("photo.jpg", {
				base64: img.src //nossa base64
			}, "image/jpg");


			//salvar imagem e quando salvar callback
			file.save().then(function () {
				//nossa tabela
				var Imagens = Parse.Object.extend("imagens_phonegapbootcamp");
				var tabela = new Imagens();
				tabela.save({
					foo: file
				}).then(function (object) {
					//foi salvo!

					$("#status-cam").html("");
				});
			}, function (error) {
				//tivemos algum error ao salvar.
			});

		}

		//falha ao abrir câmera
		function onFail(message) {
			alert('Failed because: ' + message);
		}

	},
	destroy: function () {
		// unset events
		// stop ajax
		// destroy components
		PageLoad.ajxHandle = null;
	}
};