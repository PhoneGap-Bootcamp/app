var ContactsController = function () {};

ContactsController.prototype = {
	initialize: function () {

		// display the address information for all contacts

		function onSuccess(contacts) {
			console.log(contacts)
			alert('Found ' + contacts.length + ' navigator.contacts.');
		};

		function onError(contactError) {
			alert('onError!');
		};


		// find all contacts with 'Bob' in any name field
		var options = new ContactFindOptions();
		options.filter = "";
		options.multiple = true;

		var filter = ["*"];
		navigator.contacts.find(filter, onSuccess, onError, options);
	},
	destroy: function () {
		PageLoad.ajxHandle = null;
	}
};