var Page2Controller = function(){};

Page2Controller.prototype = {
     initialize:function(){
    
    navigator.notification.alert(
        'You are the winner!',  // message
        null,         // callback
        'Game Over',            // title
        'Done'                  // buttonName
    );
    
    
    /* CONFIRM BUTTON*/
    function onConfirm(buttonIndex) {
        alert('Você selecionou ' + buttonIndex);
    }
    
    // Botões de confirmação
        navigator.notification.confirm(
            'You are the winner!', // message
             onConfirm,            // callback to invoke with index     of button pressed
            'Game Over',           // title
            ['Restart','Exit']         // buttonLabels
        );
    
    
    
    
    /* PROMPT BUTTON */
    
    // process the promp dialog results
    function onPrompt(results) {
        alert("You selected button number " + results.buttonIndex +     " and entered " + results.input1);
    }
    
    // Show a custom prompt dialog
    //
        navigator.notification.prompt(
            'Please enter your name',  // message
            onPrompt,                  // callback to invoke
            'Registration',            // title
            ['Ok','Exit'],             // buttonLabels
            'Jane Doe'                 // defaultText
        );

    
    

    
    navigator.notification.vibrate(2000);
     },
     destroy: function(){
         // unset events
         // stop ajax
         // destroy components
         alert("saiu da tela");
         PageLoad.ajxHandle = null;
     }
};