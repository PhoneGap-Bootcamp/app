/* FASTGAP https://github.com/GustavoCostaW/FastGap 

IMPORTANT, READ LIBRARY DOCS FOR BETTER CUSTOMIZATION 


http://zeptojs.com
http://topcoat.io


*/

var AppController = function () {};

AppController.prototype = {
	initialize: function () {

	},
	//minha API
	api: function (param, returnData) {
		//consumir API get JSON
		$.get("http://dborba.com/json.php?=param" + param, function (data) {
			//se passar a função ela será chamada
			if (typeof returnData !== "undefined") {
				returnData(data);
			}
		});

	},
	destroy: function () {
		PageLoad.ajxHandle = null;
	}
};