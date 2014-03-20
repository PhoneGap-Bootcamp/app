var DeviceController = function () {};

DeviceController.prototype = {
	initialize: function () {

		//modelo do aparelho
		$("#device-model").html("device model: " + device.model);
		//plataforma
		$("#device-platform").html("device platform: " + device.platform);
		//uuid
		$("#device-uuid").html("device version: " + device.uuid);
		//versão
		$("#device-version").html("device version: " + device.version);
	},
	destroy: function () {
		PageLoad.ajxHandle = null;
	}
};