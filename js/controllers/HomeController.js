var HomeController = function(){};

HomeController.prototype = {
     initialize:function(){
         alert("veja como é fácil usar o FastGAP");
     },
     destroy: function(){
         alert("saimos da tela Home");
         PageLoad.ajxHandle = null;
     }
}