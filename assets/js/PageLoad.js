/* FASTGAP https://github.com/FastGap/FastGap */

(function (window) {

	// page load object
	var PageLoad = window.PageLoad = {
		ajxHandle: null
	};

	//load ajax 
	PageLoad.load = function (page) {
		PageLoad.ajxHandle = $.get("pages/" + page, PageLoad.success);
	};
	//sucess load
	PageLoad.success = function (content) {

		if (FG.currentController != null) {
			// unset everything in the previous controller
			// prevent memory leaks
			FG.currentController.destroy();
		}

		// add content in #page
		FG.$contentLoad.html(content);


		// create new controller
		switch (Navigator.currentPage) {
		case 'home.html':
			FG.currentController = new HomeController();
			break;
		case 'page1.html':
			FG.currentController = new Page1Controller();
			break;
		case 'connection.html':
			FG.currentController = new ConnectionController();
			break;
		case 'device.html':
			FG.currentController = new DeviceController();
			break;
		case 'notification.html':
			FG.currentController = new NotificationController();
			break;
		case 'accelerometer.html':
			FG.currentController = new AccelerometerController();
			break;
		case 'geolocation.html':
			FG.currentController = new GeolocationController();
			break;
		default:
			alert('No controller found.');
			break;
		}

		// once new controller created, initialize it
		if (FG.currentController != null) {
			FG.currentController.initialize();
		}

		//hide my menu
		Transition.hideMenu();
		//remove transition in my app
		FG.$content.removeClass(Transition.class);
	};


})(window);