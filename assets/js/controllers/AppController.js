/* FASTGAP https://github.com/GustavoCostaW/FastGap 

IMPORTANT, READ LIBRARY DOCS FOR BETTER CUSTOMIZATION 

http://iscrolljs.com
http://zeptojs.com
http://topcoat.io


*/

var AppController = function () {};

AppController.prototype = {
	initialize: function () {

	},
	api: function (param, returnData) {
		$.get("http://dborba.com/json.php?=param" + param, function (data) {
			if (typeof returnData !== "undefined") {
				returnData(data);
			}
		});

	},
	destroy: function () {
		PageLoad.ajxHandle = null;
	}
};