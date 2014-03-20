var NotificationController = function () {};

NotificationController.prototype = {
	initialize: function () {

		/* ALERTA SIMPLES */
		navigator.notification.alert(
			'Eu sou uma mensagem! essa mensagem é diferente do simples alert()', // menssagem
			null, // callback
			'Titulo aqui', // titulo
			'OK' // botoes 
		);


		/* CONFIRM BUTTON*/

		//callback
		function onConfirm(buttonIndex) {
			//alert('Você selecionou ' + buttonIndex);
		}

		// Botão de confirmação
		navigator.notification.confirm(
			'Essa mensagem é diferente do confirm(), você sabia?', // menssagem
			onConfirm, // callback 
			'Confirm', // titulo
            ['Sim', 'Não'] // botoes 
		);




		/* PROMPT BUTTON */

		// callback
		function onPrompt(results) {
			//alert("Você selecionou button numéro " + results.buttonIndex + " and entered " + results.input1);
		}

		// prompt
		navigator.notification.prompt(
			'Esse prompt é diferente do prompt()', // message
			onPrompt, // callback to invoke
			'Titulo', // titulo
            ['Ok', 'Sair'], // nome dos botões
			'Posso colocar algum texto aqui' // texto default
		);




		//vibrar celular por 2 segundos
		navigator.notification.vibrate(2000);
	},
	destroy: function () {
		// unset events
		// stop ajax
		// destroy components
		PageLoad.ajxHandle = null;
	}
};