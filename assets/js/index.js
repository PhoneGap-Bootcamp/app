/* FASTGAP https://github.com/FastGap/FastGap 

IMPORTANT, READ LIBRARY DOCS FOR BETTER CUSTOMIZATION 

http://zeptojs.com
http://topcoat.io


*/

/* GLOBAL VAR */
var app;
var connection;
var mapa;


//ready app
$(document).ready(function () {
	//create the project
	FG.init();
	app = new AppController();
	app.initialize();
});