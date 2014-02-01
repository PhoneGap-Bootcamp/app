window.addEventListener('load',function() {    
    if (typeof blackberry != "undefined") blackberry = {};
    //webworksready
    document.addEventListener('webworksready', function(e) {
        
       //bb init
       bb.init({onscreenready : function(element, id, params) {

               },
               ondomready: function(element, id, params) {
                    if(id == "connection"){
                        checkConnection();
                    }
                    else if(id == "battery") {
                        checkBattery();
                    }
                    else if(id == "localstorage") {
                        localStorage();
                    }
        }});

       //events app (scripts.js)
       mainEvents();

       //initappAbaixo
       initApp();
      
    });
});

function initApp() {
	//carrega pagina principal
	bb.pushScreen('pages/main.html', 'main');
	//welcome
	//welcome();
}



// setup window covers, and register with bbm platform
function welcome() {

	bbm.register();

	// setup the window cover (displayed when app is minimized)
	blackberry.ui.cover.setContent(blackberry.ui.cover.TYPE_IMAGE, {
		path: 'local:///images/cover.png'
	});
	blackberry.ui.cover.updateCover();

	// register with bbm
	
	setTimeout(function(){
		blackberry.ui.cover.updateCover();
	}, 0);
}


// called when access is given by the user to connect w/bbm via bbm.register()
function accessChangedCallback(accessible, status) {
	if (status == "unregistered") {
		// App is unregistered, proceed to register
		registerApp();
	} else if (status == "allowed") {}
	// Listen for other status...
}


// setup the global bbm object so we can call bbm.<function> from where-ever in the app
var bbm = {
	registered: false,

	// registers this application with the blackberry.bbm.platform APIs.
	register: function() {
		blackberry.event.addEventListener('onaccesschanged', function(accessible, status) {

			if (status === 'unregistered') {
				blackberry.bbm.platform.register({
					uuid: '5b54bb3a-ab66-11e2-a242-f23c91aec05e'
				});

			} else if (status === 'allowed') {
				bbm.registered = accessible;
			}

		}, false);
	},

	// update the users personal message in bbm
	updateMessage: function() {

		// dialog callback
		function dialogCallBack(selection) {
			var txt = selection.promptText;
			blackberry.bbm.platform.self.setPersonalMessage(
			txt,

			function(accepted) {
			});
		}

		// standard async dialog to get new 'personal message' for bbm
		blackberry.ui.dialog.standardAskAsync("Enter your new status", blackberry.ui.dialog.D_PROMPT, dialogCallBack, {
			title: "I am a dialog"
		});
	},

	// invite a contact to download your app via bbm
	inviteToDownload: function() {
		blackberry.bbm.platform.users.inviteToDownload();
	}
};


// invoke the filepicker card
function invokeFilePicker(details, type) {
	blackberry.invoke.card.invokeFilePicker(details, function(path) {
		// image
		var title = "Share Image";
		var request = {
			action: 'bb.action.SHARE',
			uri: 'file://' + path,
			target_type: ["APPLICATION", "VIEWER", "CARD"]
		};
		loadShareCard(title, request);
	},

	// cancelled filepicker
	function(reason) {
		toast("cancelled " + reason);

		// filepicker error
	}, function(error) {
		if (error) {
			toast("invoke error " + error);
		} else {
			console.log("invoke success ");
		}
	});
}


function invoke(id) {
    item = $(id);
    data = item.data("bb-title");
	var shareDream = "See how my last dream:\n\n"+data+"\n\n\ By SaveDreams BlackBerry 10";

		var title = 'Sharing Text';
		var request = {
			action: 'bb.action.SHARE',
			mime: 'text/plain',
			data: shareDream,
			target_type: ["VIEWER", "CARD"]
		};

		blackberry.invoke.card.invokeTargetPicker(request, title,
			// sucesso
			function() {},

			// erro
			function(e) {});
}


// display a toast message to the user
function toast(msg) {
	blackberry.ui.toast.show(msg);
	//alert(msg);
}
function inviteToDownload(){
	blackberry.bbm.platform.users.inviteToDownload();
}