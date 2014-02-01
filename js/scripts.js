//grava pagina
var page = "";

//events app
function mainEvents(){

    //body on menu
     $("body").on('click','div[data-class=menuItem]',function(){
                //carrega pagina
                bb.pushScreen("pages/examples/"+$(this).data("id")+".html", $(this).data("id"));
                //atualiza page
                page = $(this).data("id");
     });
}

