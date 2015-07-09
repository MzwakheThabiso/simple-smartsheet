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
                var params = encodeURIComponent( config.login.oauth.params );
                window.location = config.login.oauth.authorizeUrl + '?' + params;
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
    
    var btn_signin = document.getElementById('btn_signin');
    btn_signin.onclick = app.login;
    
};