var AccelerometerController = function () {};

AccelerometerController.prototype = {
	initialize: function () {

		//sucesso se conseguir pegar 
		function onSuccess(acceleration) {
			//mostra x
			$("#x").html('Acceleration X: ' + acceleration.x)
			//mostra y
			$("#y").html('Acceleration Y: ' + acceleration.y);
			//mostra z
			$("#z").html('Acceleration Z: ' + acceleration.z);
		};
		//error se não conseguir
		function onError() {
			$("#internal-page .title-page").html('Tivemos algum erro :(');
		};

		//opcoes
		var options = {
			frequency: 100
		}; // atualizar a cada 100 milesegundos

		//eu posso verificar de 2 formas, ficar assistindo, ou seja a cada 2 segundos ele chama o onsucess ou apenas uma vez que é o código depois desse abaixo
		//verifica toda hora a acceleracao, ideal para jogos e etc...
		var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
		//podemos "mata-lo" aqui
		//navigator.accelerometer.clearWatch(watchID);

		//chama apenas uma vez.
		/* navigator.accelerometer.getCurrentAcceleration(onSuccess, onError); */
	},
	destroy: function () {
		// unset events
		// stop ajax
		// destroy components
		PageLoad.ajxHandle = null;
	}
};