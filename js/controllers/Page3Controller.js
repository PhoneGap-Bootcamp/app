var Page3Controller = function(){};

Page3Controller.prototype = {
     initialize:function(){
    function onSuccess(acceleration) {
            $("#internal-page .title-page").html('Acceleration X: ' + acceleration.x + '\n' +
                  'Acceleration Y: ' + acceleration.y + '\n' +
                  'Acceleration Z: ' + acceleration.z + '\n' +
                  'Timestamp: '      + acceleration.timestamp + '\n');
        };
        
        function onError() {
            $("#internal-page .title-page").html('onError!');
        };
        
        var options = { frequency: 3000 };  // Update every 3 seconds
        
        var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
        
        /* navigator.accelerometer.getCurrentAcceleration(onSuccess, onError); */
     },
     destroy: function(){
         // unset events
         // stop ajax
         // destroy components
         PageLoad.ajxHandle = null;
     }
};