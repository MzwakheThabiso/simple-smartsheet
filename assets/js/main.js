var app = app || {};

app.login = function() {
    
    swal(config.login.modal,
    
    function(isConfirm){
        
        if (isConfirm) {
            
            /*
              
              Wait two seconds then redirect to the authorize login
                
            */
            var tid = window.setTimeout(function(){
                window.clearTimeout(tid);
                
                window.location = config.login.oauth.authorizeUrl + '?' + $.param(config.login.oauth.params);
                
            }, 2000);
        
        } else {
        
            /*
            
                Wait two seconds then log in again
                  
            */
            swal("Cancelled", "You have to be logged in to use SmartView", "error");
        }
        
    });
    
};


if( ! app.login() ) {
    $('#btn_signin').on('click', app.login);
};