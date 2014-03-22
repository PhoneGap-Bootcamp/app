var CarrouselController = function () {};

CarrouselController.prototype = {
	mySwiper: Object,
	initialize: function () {

		self = this;
		//remover evento de swipe para evitar problemas
		$(document).off('swipeRight', Transition.showMenu);

		/* INICIALIZANDO O AUTH NO PARSE - MINHA CONTA -*/
		Parse.initialize("FqlKJalgPPpdenKyKNoINqxiBcVzn4L77rGM2HbH", "6OvzhlviPIQfkQP47NCOLCz5JZD3YsNd0vpGvsEz");


		//lista de fotos
		var listasdefotos = Parse.Object.extend("imagens_phonegapbootcamp");
		//query
		var query = new Parse.Query(listasdefotos);
		//pegando nossa div de fotos
		var listfotos = document.getElementById("listagem-carrousel");

		//buscando fotos
		query.find().then(function (listagem) {
			//loop
			$.each(listagem, function (index, item) {

				var div = document.createElement("div");
				div.setAttribute("class", "swiper-slide");

				//criando nossa imagem e adicionando
				img = new Image();
				img.src = item.attributes.foo._url;
				div.appendChild(img);

				listfotos.appendChild(div);


			});

			//SWIPER

			self.mySwiper = $('.swiper-container').swiper({
				//opções aqui
				mode: 'horizontal',
				loop: true
				//etc..
			});

		});
	},
	destroy: function () {
		//voltar o swipe right
		$(document).on('swipeRight', Transition.showMenu);
		PageLoad.ajxHandle = null;
	}
};