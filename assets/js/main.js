var app = app || {};

app.login = function() {
    
    swal(config.login.modal.start,
    
    function(isConfirm){
        
        if (isConfirm) {
            
            /*
              
              Redirect to oAuth page
                
            */
            window.location = config.login.oauth.authorizeUrl + '?' + $.param(config.login.oauth.params);
                     
        } else {
        
            /*
            
                Wait two seconds then log in again
                  
            */
            swal(config.login.modal.canceled, function(){
                app.login(); 
            });
        }
        
    });
    
};

app.login();