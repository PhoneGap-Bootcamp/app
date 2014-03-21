var CameraController = function () {};

CameraController.prototype = {
	initialize: function () {
		Parse.initialize("FqlKJalgPPpdenKyKNoINqxiBcVzn4L77rGM2HbH", "6OvzhlviPIQfkQP47NCOLCz5JZD3YsNd0vpGvsEz");

		/*var TestObject = Parse.Object.extend("TestObject");
		var testObject = new TestObject();
		testObject.save({
			foo: "bar"
		}).then(function (object) {
			alert("yay! it worked");
		});*/





		navigator.camera.getPicture(onSuccess, onFail, {
			quality: 30,
			destinationType: Camera.DestinationType.DATA_URL
		});

		function onSuccess(imageData) {
			//var image = document.getElementById('myImage');
			//image.src = "data:image/jpeg;base64," + imageData;
			console.log(imageData);

			var file = new Parse.File("photo.jpg", {
				base64: imageData
			}, "image/jpg");

			file.save().then(function () {
				alert("salvei a imagem")
				var TestObject = Parse.Object.extend("new");
				var testObject = new TestObject();
				testObject.save({
					foo: file
				}).then(function (object) {
					alert("enviado");
				});
				// The file has been saved to Parse.
			}, function (error) {
				// The file either could not be read, or could not be saved to Parse.
			});

			console.log(file);
		}

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