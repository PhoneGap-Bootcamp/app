var GeolocationController = function () {};

GeolocationController.prototype = {
	initialize: function () {

		//criando objetos no meu controller
		this.lat;
		this.lng;
		this.accuracy;


		//se conseguir pegar informacoes do usuario
		var onSuccess = function (position) {
			//exemplo do que o objeto position retorna

			/*alert('Latitude: ' + position.coords.latitude + '\n' +
				'Longitude: ' + position.coords.longitude + '\n' +
				'Altitude: ' + position.coords.altitude + '\n' +
				'Accuracy: ' + position.coords.accuracy + '\n' +
				'Altitude Accuracy: ' + position.coords.altitudeAccuracy + '\n' +
				'Heading: ' + position.coords.heading + '\n' +
				'Speed: ' + position.coords.speed + '\n' +
				'Timestamp: ' + position.timestamp + '\n');*/

			//salvado informacoes
			this.lat = position.coords.latitude;
			this.lng = position.coords.longitude;
			this.accuracy = position.coords.accuracy;


			//chama funcao pra mostrar marcador onde o usuario se encontra
			onLocationFound();
		};

		// se tiver algum error ao obter lat e lng

		function onError(error) {
			alert('code: ' + error.code + '\n' +
				'message: ' + error.message + '\n');
		}

		//pega posicao atual, se conseguir chama onsuccess se nao onerror
		navigator.geolocation.getCurrentPosition(onSuccess, onError);

		//setar altura do mapa de acordo com o box que muda de conteudo
		$("#map").height(window.innerHeight - FG.$headerApp.height());




		/* CODIGO ABAIXO DO MAPA LEAFLET */


		//cria o mapa
		mapa = L.map('map', {
			layers: MQ.mapLayer(),
			center: [38.895345, -77.030101], //seto uma lat e lng padrão
			zoom: 18 //zoom
		});

		//quando achar o geolocation chama a funcao abaixo
		function onLocationFound() {
			//cria o radius
			var radius = this.accuracy / 2;

			//adiciona o marcador e adiciona o texto e abre
			L.marker(L.latLng(this.lat, this.lng)).addTo(mapa)
				.bindPopup("Você está aqui!").openPopup();

			//e muda o mapa para aquela posição
			mapa.setView(L.latLng(this.lat, this.lng));
		}
		//error
		function onLocationError(e) {
			alert(e.message);
		}

	},
	destroy: function () {
		//destruir mapa, importante!
		mapa.remove();
		// unset events
		// stop ajax
		// destroy components
		PageLoad.ajxHandle = null;
	}
};